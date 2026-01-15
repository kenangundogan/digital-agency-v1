import React, { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactBoxesProps, ContactBoxItem } from "@/types";
import { Container } from "@/components/ui";

// Default contact boxes data
const defaultContactBoxes: ContactBoxItem[] = [
  {
    title: "Address",
    icon: <MapPin className="w-16 h-16" strokeWidth={1} />,
    descriptions: ["Turkey, İstanbul, İstanbul"],
  },
  {
    title: "Phone",
    icon: <Phone className="w-16 h-16" strokeWidth={1} />,
    descriptions: ["(+123) 456 78 90", "(+456) 123 67 89"],
  },
  {
    title: "Email",
    icon: <Mail className="w-16 h-16" strokeWidth={1} />,
    descriptions: ["example@gmail.com", "example2@gmail.com"],
  },
];

/**
 * Contact information boxes component
 * Displays contact details in a grid layout
 */
const ContactBoxes: React.FC<ContactBoxesProps> = ({ items = defaultContactBoxes }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((box, index) => (
          <div key={index} className="bg-white p-8 border border-gray-200 flex items-start justify-start gap-4 hover:bg-gray-100 transition-all duration-300">
            <div className="flex items-center justify-center shrink-0">{box.icon}</div>
            <div>
              <h3 className="text-2xl font-bold mb-4">{box.title}</h3>
              {box.descriptions.map((description, descIndex) => (
                <p key={descIndex} className="text-xl text-gray-500 mb-2">
                  {description}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ContactBoxes;
