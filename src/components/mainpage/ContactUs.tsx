"use client";

import React, { useState } from "react";
import { ContactFormData } from "@/types";
import { InputField } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ContactUsProps {
  darkMode?: boolean;
  title?: string;
  image?: string;
  onSubmit?: (data: ContactFormData) => void;
  contactEmail?: string;
}

/**
 * Contact form section component
 * Can be used in light or dark mode
 */
const ContactUs: React.FC<ContactUsProps> = ({ darkMode = false, title = "Contact Us", image = "/video-img-2.jpg", onSubmit, contactEmail = "info@onnatgmail.com" }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const variant = darkMode ? "dark" : "light";

  return (
    <div className={cn("w-full flex flex-col lg:flex-row relative", darkMode ? "bg-black text-white" : "bg-white text-black")}>
      {/* Mobile Background Image */}
      <div className="lg:hidden w-full h-48 sm:h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20 lg:pl-0 flex items-center justify-start">
        <div className={cn("w-full lg:max-w-2xl px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-24 lg:pl-0 relative z-20", darkMode ? "bg-black text-white" : "bg-white text-black")}>
          <div className="max-w-2xl mx-auto lg:ml-auto lg:mr-0">
            <h2 className={cn("text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12", darkMode ? "text-white" : "text-black")}>{title}</h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter Your First Name" required variant={variant} />
                <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Your Last Name" required variant={variant} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required variant={variant} />
                <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter Your Phone Number" required variant={variant} />
              </div>

              <InputField label="Message" name="message" type="textarea" value={formData.message} onChange={handleChange} placeholder="Enter Your Message" rows={3} variant={variant} />

              <div className="pt-4 sm:pt-6">
                <button type="submit" className={cn("w-full sm:w-auto bg-red-600 hover:bg-red-700 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-colors", darkMode ? "text-white" : "text-white")}>
                  Submit
                </button>
              </div>

              <div className={cn("pt-6 sm:pt-8 text-xs sm:text-sm", darkMode ? "text-white" : "text-black")}>
                <p>Couldn&apos;t find what you were looking for? Write to us at.</p>
                <Link href={`mailto:${contactEmail}`} className={cn("font-semibold hover:underline", darkMode ? "text-white" : "text-black")}>
                  {contactEmail}
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Desktop Background Image */}
        <div className="absolute right-0 top-0 z-10 w-full h-full hidden lg:block lg:w-1/2 xl:w-3/5 min-h-[600px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
