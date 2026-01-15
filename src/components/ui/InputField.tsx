"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  variant?: "light" | "dark";
  className?: string;
}

const variantClasses = {
  light: {
    label: "text-black",
    input: "text-black border-gray-300 placeholder:text-gray-400 focus:border-black",
  },
  dark: {
    label: "text-white",
    input: "text-white border-gray-600 placeholder:text-gray-500 focus:border-white",
  },
};

/**
 * Reusable form input field component
 * Supports text, email, tel, and textarea types
 */
const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", value, onChange, placeholder, required = false, rows = 3, variant = "dark", className }) => {
  const variantStyles = variantClasses[variant];
  const baseInputClass = cn("w-full bg-transparent border-b pb-2 sm:pb-3 text-sm sm:text-base", "focus:outline-none transition-colors", variantStyles.input);

  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={name} className={cn("text-xs sm:text-sm mb-2", variantStyles.label)}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? <textarea id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} rows={rows} required={required} className={cn(baseInputClass, "resize-none")} /> : <input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} className={baseInputClass} />}
    </div>
  );
};

export default InputField;
