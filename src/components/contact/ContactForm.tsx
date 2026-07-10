"use client";

import React, { useState } from "react";
import { CheckCircle, ChevronRight, Loader2, ChevronDown } from "lucide-react";

const SERVICE_OPTIONS = [
  "Retail Fitout",
  "Office Fitout",
  "Airport Retail",
  "Mall Boutique",
  "Hospitality Fitout",
  "MEP Works",
  "In-House Manufacturing",
  "Full Turnkey Solution",
];

const BUDGET_OPTIONS = [
  "Under AED 100,000",
  "AED 100,000 - 500,000",
  "AED 500,000 - 1,000,000",
  "AED 1,000,000 - 5,000,000",
  "Above AED 5,000,000",
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
        className={`block text-[9px] font-bold uppercase tracking-[0.25em] mb-3 ${
          dark ? "text-brand-gold" : "text-neutral-400"
        }`}
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[10px] text-red-400 font-light">{error}</p>
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

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b py-4 outline-none text-base font-light transition-all duration-300 ${
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
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 md:py-24 text-center gap-8">
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
    <form className="space-y-10 md:space-y-12" onSubmit={handleSubmit} noValidate>

      {/* Row 1 - Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
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
            placeholder="jane@yourcompany.com"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            className={inputClass("email")}
          />
        </InputField>
      </div>

      {/* Row 2 - Phone & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
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
            placeholder="Your Company Name"
            value={form.company}
            onChange={handleChange}
            onFocus={() => setFocused("company")}
            onBlur={() => setFocused(null)}
            className={inputClass("company")}
          />
        </InputField>
      </div>

      {/* Row 3 - Service & Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <InputField label="Service Required" id="service" dark={dark}>
          <div className="relative w-full">
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              onFocus={() => setFocused("service")}
              onBlur={() => setFocused(null)}
              className={`${inputClass("service")} appearance-none cursor-pointer pr-8`}
              style={{ colorScheme: dark ? "dark" : "light" }}
            >
              <option value="" style={{ background: dark ? "#0a0a0a" : "#fff" }}>Select a service.</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} style={{ background: dark ? "#0a0a0a" : "#fff" }}>{opt}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 flex items-center pr-1">
              <ChevronDown size={18} strokeWidth={1.5} className={dark ? "text-white/40" : "text-neutral-400"} />
            </div>
          </div>
        </InputField>
        <InputField label="Estimated Budget" id="budget" dark={dark}>
          <div className="relative w-full">
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              onFocus={() => setFocused("budget")}
              onBlur={() => setFocused(null)}
              className={`${inputClass("budget")} appearance-none cursor-pointer pr-8`}
              style={{ colorScheme: dark ? "dark" : "light" }}
            >
              <option value="" style={{ background: dark ? "#0a0a0a" : "#fff" }}>Select budget range.</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt} style={{ background: dark ? "#0a0a0a" : "#fff" }}>{opt}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 flex items-center pr-1">
              <ChevronDown size={18} strokeWidth={1.5} className={dark ? "text-white/40" : "text-neutral-400"} />
            </div>
          </div>
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
          className={`${inputClass("message")} resize-none`}
        />
      </InputField>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex items-center gap-4 px-10 py-5 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
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
