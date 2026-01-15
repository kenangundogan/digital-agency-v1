"use client";

import Link from "next/link";
import React, { useState, useCallback } from "react";
import { InputField } from "@/components/ui";

interface MegaMenuContactFormProps {
  brandName: string;
}

export const MegaMenuContactForm: React.FC<MegaMenuContactFormProps> = ({ brandName }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    },
    [formData]
  );

  return (
    <div>
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleFormChange} placeholder="Enter Your First Name" required variant="dark" />
          <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleFormChange} placeholder="Enter Your Last Name" required variant="dark" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleFormChange} placeholder="Enter Your Email" required variant="dark" />
          <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleFormChange} placeholder="Enter Your Phone Number" required variant="dark" />
        </div>

        <InputField label="Message" name="message" type="textarea" value={formData.message} onChange={handleFormChange} placeholder="Enter Your Message" rows={4} variant="dark" />

        <div className="pt-4">
          <button type="submit" className="bg-red-500 text-white px-10 py-4 font-medium hover:bg-red-600 transition-colors">
            Submit Button
          </button>
        </div>
      </form>

      <div className="mt-10">
        <p className="text-gray-400 text-sm">Couldn&apos;t find what you were looking for? Write to us at.</p>
        <Link href={`mailto:info@${brandName.toLowerCase()}gmail.com`} className="text-white text-sm font-medium hover:text-red-500 transition-colors">
          info@{brandName.toLowerCase()}gmail.com
        </Link>
      </div>
    </div>
  );
};
