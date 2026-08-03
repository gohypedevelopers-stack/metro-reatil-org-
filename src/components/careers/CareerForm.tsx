"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Upload, Check, Loader2, AlertCircle, ChevronDown } from 'lucide-react';

const DEPARTMENT_OPTIONS = [
  { value: "Design", label: "Design & 3D Art" },
  { value: "Projects", label: "Project Management" },
  { value: "Operations", label: "Site Operations" },
  { value: "Carpentry", label: "Carpentry & Manufacturing" },
  { value: "Engineering", label: "MEP & Engineering" },
  { value: "Procurement", label: "Procurement & Estimation" },
  { value: "Sales", label: "Sales & Client Relations" },
  { value: "Admin", label: "Administration & Finance" },
  { value: "Other", label: "Other (Please specify)" },
];

const EXPERIENCE_OPTIONS = [
  { value: "Fresher", label: "Entry Level / Graduate" },
  { value: "1-3 Years", label: "1 - 3 Years" },
  { value: "3-5 Years", label: "3 - 5 Years" },
  { value: "5+ Years", label: "5+ Years (Senior)" },
];

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  align?: "left" | "right";
}

function CustomSelect({
  value,
  options,
  onChange,
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

  const currentLabel = options.find((opt) => opt.value === value)?.label || value;

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-neutral-900 border border-white/10 text-white py-2.5 pl-3 pr-8 outline-none transition-all text-xs md:text-sm font-light rounded-sm flex items-center justify-between cursor-pointer ${
          isOpen ? "border-brand-gold" : "hover:border-white/20"
        }`}
      >
        <span>{currentLabel}</span>
        <ChevronDown size={15} strokeWidth={1.5} className="text-white/40" />
      </div>

      {isOpen && (
        <div
          className={`absolute mt-1 w-max min-w-full z-50 bg-[#0d0d0d] border border-white/10 text-white rounded-sm shadow-lg py-1.5 animate-in fade-in slide-in-from-top-1 duration-200 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-[10px] md:text-xs font-light cursor-pointer hover:bg-white/5 text-neutral-300 hover:text-white transition-colors"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: 'Design',
    experience: '1-3 Years',
    portfolioUrl: '',
    coverLetter: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [customDepartment, setCustomDepartment] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setErrorMessage('File size exceeds the 10MB limit.');
        return;
      }
      setFile(selectedFile);
      setErrorMessage('');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      // Check file types (PDF, DOCX, DOC)
      const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword'
      ];
      
      if (!allowedTypes.includes(droppedFile.type)) {
        setErrorMessage('Please upload a PDF or Word document (.doc, .docx).');
        return;
      }

      if (droppedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setErrorMessage('File size exceeds the 10MB limit.');
        return;
      }

      setFile(droppedFile);
      setErrorMessage('');
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setErrorMessage('Please upload your CV/Resume.');
      return;
    }

    if (formData.department === 'Other' && !customDepartment.trim()) {
      setErrorMessage('Please specify your department.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call to submit the form
    try {
      const formId = process.env.NEXT_PUBLIC_WP_CAREER_FORM_ID;
      const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.replace('/graphql', '');
      
      if (!formId || !apiUrl) {
        console.warn("Career form ID or API URL is missing in environment variables.");
        // Fallback for development if env variables are not set yet
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSubmitStatus('success');
      } else {
        const submitData = new FormData();
        submitData.append("_wpcf7_unit_tag", `wpcf7-f${formId}-p1-o1`);
        submitData.append("fullName", formData.fullName);
        submitData.append("emailAddress", formData.email);
        submitData.append("phoneNumber", formData.phone);
        submitData.append("department", formData.department === 'Other' ? customDepartment : formData.department);
        submitData.append("experience", formData.experience);
        submitData.append("portfolioUrl", formData.portfolioUrl);
        submitData.append("coverLetter", formData.coverLetter);
        submitData.append("cv", file);

        const res = await fetch(`${apiUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`, {
          method: "POST",
          body: submitData,
        });

        const data = await res.json();
        
        if (data.status === "mail_sent" || res.ok) {
          setSubmitStatus('success');
        } else {
          console.error("Form submission error:", data);
          setSubmitStatus('error');
          setErrorMessage(data.message || 'Something went wrong. Please try again.');
          return;
        }
      }

      // Reset form on success
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        department: 'Design',
        experience: '1-3 Years',
        portfolioUrl: '',
        coverLetter: '',
      });
      setCustomDepartment('');
      setFile(null);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white/5 border border-brand-gold/30 p-8 sm:p-10 backdrop-blur-md rounded-sm text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-brand-gold/10 border border-brand-gold rounded-full flex items-center justify-center mb-6 text-brand-gold animate-bounce">
          <Check size={28} />
        </div>
        <h3 className="text-2xl font-serif text-white uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
          Application Submitted
        </h3>
        <p className="hidden md:block text-neutral-300 text-sm leading-relaxed max-w-sm mb-8">
          Thank you for applying! Our HR and department heads will review your profile. If your skills match our requirements, we'll get in touch soon.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="px-6 py-3 border border-white/20 hover:border-brand-gold text-white text-[10px] font-bold uppercase tracking-widest transition-colors rounded-sm"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 p-4 sm:p-8 lg:p-10 backdrop-blur-md rounded-sm">
      <h3 className="text-xl md:text-2xl font-serif text-brand-gold uppercase tracking-wider mb-8" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
        Submit Your Application
      </h3>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="space-y-1.5 md:space-y-2">
          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-neutral-400">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="John Doe"
            className="w-full bg-white/5 border border-white/10 text-white placeholder-neutral-500 py-2.5 px-3 md:py-3 md:px-4 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-xs md:text-sm font-light rounded-sm"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5 md:space-y-2">
            <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-neutral-400">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 text-white placeholder-neutral-500 py-2.5 px-3 md:py-3 md:px-4 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-xs md:text-sm font-light rounded-sm"
            />
          </div>
          <div className="space-y-1.5 md:space-y-2">
            <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-neutral-400">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+971 XX XXX XXXX"
              className="w-full bg-white/5 border border-white/10 text-white placeholder-neutral-500 py-2.5 px-3 md:py-3 md:px-4 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-xs md:text-sm font-light rounded-sm"
            />
          </div>
        </div>

        {/* Department & Experience */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5 md:space-y-2">
            <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-neutral-400">Department *</label>
            <CustomSelect
              value={formData.department}
              options={DEPARTMENT_OPTIONS}
              onChange={(val) => setFormData((prev) => ({ ...prev, department: val }))}
              align="left"
            />

            {formData.department === 'Other' && (
              <div className="space-y-1.5 md:space-y-2 mt-4">
                <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-neutral-400">Specify Department *</label>
                <input
                  type="text"
                  name="customDepartment"
                  required
                  value={customDepartment}
                  onChange={(e) => setCustomDepartment(e.target.value)}
                  placeholder="e.g. Designer"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-neutral-500 py-2.5 px-3 md:py-3 md:px-4 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-xs md:text-sm font-light rounded-sm animate-in fade-in slide-in-from-top-2 duration-300"
                />
              </div>
            )}
          </div>
          <div className="space-y-1.5 md:space-y-2">
            <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-neutral-400">Experience *</label>
            <CustomSelect
              value={formData.experience}
              options={EXPERIENCE_OPTIONS}
              onChange={(val) => setFormData((prev) => ({ ...prev, experience: val }))}
              align="right"
            />
          </div>
        </div>

        {/* Portfolio URL */}
        <div className="space-y-1.5 md:space-y-2">
          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-neutral-400">Portfolio Link (Optional)</label>
          <input
            type="url"
            name="portfolioUrl"
            value={formData.portfolioUrl}
            onChange={handleInputChange}
            placeholder="https://behance.net/username or Google Drive link"
            className="w-full bg-white/5 border border-white/10 text-white placeholder-neutral-500 py-2.5 px-3 md:py-3 md:px-4 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-xs md:text-sm font-light rounded-sm"
          />
        </div>

        {/* Cover Letter */}
        <div className="space-y-1.5 md:space-y-2">
          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-neutral-400">Brief Introduction / Message</label>
          <textarea
            name="coverLetter"
            rows={4}
            value={formData.coverLetter}
            onChange={handleInputChange}
            placeholder="Tell us a little bit about yourself..."
            className="w-full bg-white/5 border border-white/10 text-white placeholder-neutral-500 py-2.5 px-3 md:py-3 md:px-4 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-xs md:text-sm font-light rounded-sm resize-none h-20 md:h-32"
          />
        </div>

        {/* File Drag and Drop Zone */}
        <div className="space-y-1.5 md:space-y-2">
          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-neutral-400">Attach CV / Resume *</label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={triggerFileSelect}
            className={`border-2 border-dashed rounded-sm p-6 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
              isDragging
                ? 'border-brand-gold bg-brand-gold/10'
                : file
                ? 'border-emerald-500/50 bg-emerald-500/5'
                : 'border-white/10 hover:border-brand-gold/30 bg-white/[0.02]'
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="hidden"
            />
            
            {file ? (
              <>
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
                  <Check size={20} />
                </div>
                <p className="text-white text-sm font-medium truncate max-w-xs">{file.name}</p>
                <p className="text-neutral-400 text-xs mt-1">{(file.size / (1024 * 1024)).toFixed(2)} MB • Click to replace</p>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-white/5 text-neutral-400 flex items-center justify-center mb-3 group-hover:text-brand-gold">
                  <Upload size={20} />
                </div>
                <p className="text-white text-sm font-medium">Drag and drop your CV here</p>
                <p className="text-neutral-400 text-xs mt-1">Accepts PDF, DOCX or DOC up to 10MB</p>
              </>
            )}
          </div>
        </div>

        {/* Error Messages */}
        {errorMessage && (
          <div className="flex items-center gap-2 text-rose-500 text-xs bg-rose-500/5 border border-rose-500/10 p-3 rounded-sm">
            <AlertCircle size={14} className="shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-brand-gold hover:bg-yellow-600 disabled:bg-neutral-700 text-white text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 rounded-sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Submitting Application...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </form>
    </div>
  );
}
