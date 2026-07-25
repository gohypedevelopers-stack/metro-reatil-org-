"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, ChevronRight, Loader2, ChevronDown } from "lucide-react";

const SERVICE_OPTIONS = [
  "Retail Fitout",
  "Office Fitout",
  "Airport Retail",
  "Mall Boutique",
  "Hospitality",
  "MEP Works",
  "Manufacturing",
  "Turnkey Solution",
];

const BUDGET_OPTIONS = [
  "Under AED 100k",
  "AED 100k - 500k",
  "AED 500k - 1M",
  "AED 1M - 5M",
  "Above AED 5M",
  "To Be Discussed",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function InputField({
  label,
  id,
  error,
  dark,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`block text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] mb-1.5 md:mb-3 ${
          dark ? "text-brand-gold" : "text-neutral-400"
        }`}
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-[9px] md:text-[10px] text-red-400 font-light">{error}</p>
      )}
    </div>
  );
}

interface CustomSelectProps {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
  dark?: boolean;
  align?: "left" | "right";
}

function CustomSelect({
  value,
  options,
  placeholder,
  onChange,
  dark,
  align = "left",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-transparent border-b py-2.5 md:py-4 outline-none text-[11px] md:text-sm font-light transition-all duration-300 flex items-center justify-between cursor-pointer ${
          dark
            ? "text-white border-white/15 hover:border-white/30"
            : "text-brand-dark border-neutral-200"
        } ${isOpen ? "border-brand-gold" : ""}`}
      >
        <span className={value ? "" : dark ? "text-neutral-600" : "text-neutral-300"}>
          {value || placeholder}
        </span>
        <ChevronDown size={16} strokeWidth={1.5} className={dark ? "text-white/40" : "text-neutral-400"} />
      </div>

      {isOpen && (
        <div
          className={`absolute mt-1 w-max min-w-full z-50 border shadow-lg py-1.5 animate-in fade-in slide-in-from-top-1 duration-200 ${
            align === "right" ? "right-0" : "left-0"
          } ${
            dark
              ? "bg-[#0d0d0d] border-white/10 text-white"
              : "bg-white border-neutral-200 text-brand-dark"
          }`}
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-[10px] md:text-xs font-light cursor-pointer transition-colors ${
                dark
                  ? "hover:bg-white/5 text-neutral-300 hover:text-white"
                  : "hover:bg-neutral-100 text-neutral-600 hover:text-brand-dark"
              }`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const inputClass = (field: string, sizeClass = "text-sm md:text-base") =>
    `w-full bg-transparent border-b py-2.5 md:py-4 outline-none ${sizeClass} font-light transition-all duration-300 ${
      dark
        ? "placeholder:text-neutral-600 text-white"
        : "placeholder:text-neutral-300 text-brand-dark"
    } ${
      errors[field as keyof FormErrors]
        ? "border-red-400"
        : focused === field
        ? "border-brand-gold"
        : dark
        ? "border-white/15 hover:border-white/30"
        : "border-neutral-200"
    }`;


  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (form.phone && !/^[\d\s\+\-\(\)]{7,20}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!form.message.trim()) newErrors.message = "Please tell us about your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    
    const formId = process.env.NEXT_PUBLIC_WP_CONTACT_FORM_ID;
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.replace('/graphql', '');
    
    if (!formId || !apiUrl) {
      console.warn("Contact form ID or API URL is missing in environment variables.");
      // Fallback for development if env variables are not set yet
      await new Promise((r) => setTimeout(r, 2000));
      setStatus("success");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("_wpcf7_unit_tag", `wpcf7-f${formId}-p1-o1`);
      formData.append("fullName", form.name);
      formData.append("emailAddress", form.email);
      formData.append("phoneNumber", form.phone);
      formData.append("companyName", form.company);
      formData.append("serviceType", form.service);
      formData.append("budgetRange", form.budget);
      formData.append("projectMessage", form.message);

      const res = await fetch(`${apiUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      
      if (data.status === "mail_sent" || res.ok) {
        setStatus("success");
      } else {
        console.error("Form submission error:", data);
        setStatus("idle");
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 md:py-24 text-center gap-4 md:gap-8">
        <div className="w-20 h-20 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center animate-in zoom-in duration-500">
          <CheckCircle size={36} className="text-brand-gold" strokeWidth={1.5} />
        </div>
        <div className="space-y-3 max-w-sm">
          <h3
            className={`text-2xl md:text-3xl font-serif uppercase tracking-tight ${dark ? "text-white" : "text-brand-dark"}`}
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            Message Sent
          </h3>
          <p className={`font-light text-sm leading-relaxed ${dark ? "text-neutral-400" : "text-neutral-500"}`}>
            Thank you for reaching out. A member of our team will be in touch with you within one business day.
          </p>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
          }}
          className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold border-b border-brand-gold/40 hover:border-brand-gold pb-0.5 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6 md:space-y-12" onSubmit={handleSubmit} noValidate>

      {/* Row 1 - Name & Email */}
      <div className="grid grid-cols-2 gap-4 md:gap-12">
        <InputField label="Full Name *" id="name" error={errors.name} dark={dark}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            className={inputClass("name")}
          />
        </InputField>
        <InputField label="Email Address *" id="email" error={errors.email} dark={dark}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            className={inputClass("email")}
          />
        </InputField>
      </div>

      {/* Row 2 - Phone & Company */}
      <div className="grid grid-cols-2 gap-4 md:gap-12">
        <InputField label="Phone Number" id="phone" error={errors.phone} dark={dark}>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+971 XX XXX XXXX"
            value={form.phone}
            onChange={handleChange}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
            className={inputClass("phone")}
          />
        </InputField>
        <InputField label="Company / Brand" id="company" dark={dark}>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            onFocus={() => setFocused("company")}
            onBlur={() => setFocused(null)}
            className={inputClass("company")}
          />
        </InputField>
      </div>

      {/* Row 3 - Service & Budget */}
      <div className="grid grid-cols-2 gap-4 md:gap-12">
        <InputField label="Service Required" id="service" dark={dark}>
          <CustomSelect
            value={form.service}
            options={SERVICE_OPTIONS}
            placeholder="Select service"
            onChange={(val) => setForm((prev) => ({ ...prev, service: val }))}
            dark={dark}
            align="left"
          />
        </InputField>
        <InputField label="Estimated Budget" id="budget" dark={dark}>
          <CustomSelect
            value={form.budget}
            options={BUDGET_OPTIONS}
            placeholder="Select budget"
            onChange={(val) => setForm((prev) => ({ ...prev, budget: val }))}
            dark={dark}
            align="right"
          />
        </InputField>
      </div>

      {/* Row 4 - Message */}
      <InputField label="Project Details *" id="message" error={errors.message} dark={dark}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project - brand concept, location, timeline, and any special requirements."
          value={form.message}
          onChange={handleChange}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          className={`${inputClass("message")} resize-none h-20 md:h-32`}
        />
      </InputField>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 pt-2 text-center sm:text-left">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex items-center justify-center gap-4 px-8 py-3 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending.
            </>
          ) : (
            <>
              Submit Inquiry
              <ChevronRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </>
          )}
        </button>
        <p className={`text-xs font-light ${dark ? "text-neutral-500" : "text-neutral-400"}`}>
          We reply within 1 business day.
        </p>
      </div>
    </form>
  );
}
