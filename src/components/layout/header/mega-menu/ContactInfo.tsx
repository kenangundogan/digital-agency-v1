"use client";

import Link from "next/link";
import React from "react";
import { ContactInfo as ContactInfoType } from "@/types";
import { SocialLinks } from "@/components/ui";

interface MegaMenuContactInfoProps {
  contactInfo: ContactInfoType;
}

export const MegaMenuContactInfo: React.FC<MegaMenuContactInfoProps> = ({ contactInfo }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
      {/* Address */}
      {contactInfo.address && (
        <div>
          <h4 className="text-gray-400 text-sm mb-3">Address</h4>
          <p className="text-white text-sm leading-relaxed whitespace-pre-line">{contactInfo.address}</p>
        </div>
      )}

      {/* Phone Numbers */}
      {contactInfo.phones && contactInfo.phones.length > 0 && (
        <div>
          <h4 className="text-gray-400 text-sm mb-3">Contact Phone</h4>
          {contactInfo.phones.map((phone, index) => (
            <Link key={index} href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="text-red-500 text-sm block hover:text-red-400 transition-colors">
              {phone}
            </Link>
          ))}
        </div>
      )}

      {/* Emails */}
      {contactInfo.emails && contactInfo.emails.length > 0 && (
        <div>
          <h4 className="text-gray-400 text-sm mb-3">Contact Mail</h4>
          {contactInfo.emails.map((email, index) => (
            <Link key={index} href={`mailto:${email}`} className="text-white text-sm hover:text-gray-300 transition-colors block">
              {email}
            </Link>
          ))}
        </div>
      )}

      {/* Social Links */}
      {contactInfo.socialLinks && contactInfo.socialLinks.length > 0 && (
        <div>
          <h4 className="text-gray-400 text-sm mb-3">Follow Us</h4>
          <SocialLinks links={contactInfo.socialLinks} variant="dark" />
        </div>
      )}
    </div>
  );
};
