import React from "react";
import { MapProps } from "@/types";

/**
 * Google Maps embed component
 * Displays an interactive map using iframe embed
 */
const Map: React.FC<MapProps> = ({ embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.663967725795!2d28.97479197565822!3d41.03700129154174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBLb2NhdGVwZSwgMzQ0MzUgQmV5b8SfbHUvxLBzdGFuYnVs!5e1!3m2!1str!2str!4v1768341258147!5m2!1str!2str", height = 800 }) => {
  return (
    <div className="w-full h-full">
      <iframe src={embedUrl} width="100%" height={height} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location Map" />
    </div>
  );
};

export default Map;
