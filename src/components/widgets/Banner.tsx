import React from "react";
import Image from "next/image";

const Banner = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-12 sm:mb-16 lg:mb-20">
      <div className="relative w-full h-full">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>
    </div>
  );
};

export default Banner;
