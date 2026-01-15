/**
 * Shared types for the digital agency website
 * All component props and data structures are defined here
 * All props are optional with default values in components for flexibility
 */

import { ReactNode } from "react";

// ==================== Common Types ====================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform: "facebook" | "twitter" | "instagram" | "youtube" | "linkedin" | "x";
  href: string;
  ariaLabel?: string;
}

export interface ContactInfo {
  address?: string;
  phones?: string[];
  emails?: string[];
  socialLinks?: SocialLink[];
}

// ==================== Section Types ====================

export interface SectionTitleProps {
  /** Category text displayed above the title (e.g., "About Us", "Services") */
  category?: string;
  /** Main title text */
  title: string;
  /** Optional subtitle/description */
  description?: string;
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Icon to display before category */
  showIcon?: boolean;
  /** Custom icon path */
  iconPath?: string;
  /** Title size variant */
  size?: "sm" | "md" | "lg" | "xl";
  /** Additional className */
  className?: string;
}

// ==================== Hero Types ====================

export interface HeroSlide {
  id: string | number;
  tagline?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface HeroProps {
  title?: string;
  title2?: string;
  description?: string;
  graphicElement?: string;
}

// ==================== Service Types ====================

export interface Service {
  id?: string | number;
  title: string;
  description: string;
  category?: string;
  icon?: ReactNode;
  href?: string;
}

export interface BestServicesProps {
  category?: string;
  title?: string;
  services?: Service[];
  ctaText?: string;
  ctaLink?: string;
}

// ==================== Portfolio/Project Types ====================

export interface PortfolioItem {
  id?: string | number;
  title: string;
  description?: string;
  image: string;
  category?: string;
  href?: string;
}

export interface PortfolioProps {
  category?: string;
  title?: string;
  description?: string;
  items?: PortfolioItem[];
  ctaText?: string;
  ctaLink?: string;
}

// ==================== Blog Types ====================

export interface BlogPost {
  id: string | number;
  title: string;
  image: string;
  date: string;
  month: string;
  comments?: number;
  excerpt?: string;
  href?: string;
  author?: string;
  category?: string;
  year?: number;
  content?: string;
}

export interface BlogProps {
  category?: string;
  title?: string;
  posts?: BlogPost[];
  ctaText?: string;
  ctaLink?: string;
}

export interface BlogCategory {
  id: string | number;
  name: string;
  count: number;
  href?: string;
}

export interface BlogTag {
  id: string | number;
  name: string;
  href?: string;
}

export interface BlogSidebarProps {
  categories?: BlogCategory[];
  tags?: BlogTag[];
  onSearch?: (query: string) => void;
}

// ==================== Team Types ====================

export interface TeamMember {
  id?: string | number;
  name: string;
  role: string;
  image: string;
  socialLinks?: SocialLink[];
}

export interface TeamProps {
  category?: string;
  title?: string;
  members?: TeamMember[];
}

// ==================== Testimonial Types ====================

export interface Testimonial {
  id?: string | number;
  name: string;
  role: string;
  company?: string;
  image: string;
  content: string;
  rating?: number;
}

export interface TestimonialsProps {
  testimonials?: Testimonial[];
}

// ==================== FAQ Types ====================

export interface FAQItem {
  id?: string | number;
  question: string;
  answer: string;
}

export interface FAQProps {
  category?: string;
  title?: string;
  items?: FAQItem[];
  defaultOpenIndex?: number;
}

// ==================== Partner Types ====================

export interface Partner {
  id?: string | number;
  name: string;
  logo: string;
  href?: string;
}

export interface PartnersProps {
  title?: string;
  partners?: Partner[];
}

// ==================== Contact Types ====================

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactBoxItem {
  title: string;
  icon: ReactNode;
  descriptions: string[];
}

export interface ContactBoxesProps {
  items?: ContactBoxItem[];
}

// ==================== About Types ====================

export interface AboutFeature {
  title: string;
  description: string;
}

export interface AboutProps {
  category?: string;
  title?: string;
  description?: string;
  image?: string;
  secondaryTitle?: string;
  secondaryDescription?: string;
  secondaryImage?: string;
  features?: AboutFeature[];
  ctaText?: string;
  ctaLink?: string;
}

// ==================== Skills Types ====================

export interface Skill {
  percentage: number;
  label: string;
}

export interface SkillsProps {
  title?: string;
  subtitle?: string;
  skills?: Skill[];
}

// Team Member Skills Types
export interface TeamSkillBar {
  name: string;
  percentage: number;
}

export interface TeamSkillCard {
  name: string;
  percentage: number;
  icon: string;
  color?: string;
}

export interface TeamSkillsProps {
  skillBars?: TeamSkillBar[];
  skillCards?: TeamSkillCard[];
}

// ==================== Video Types ====================

export interface VideoProps {
  thumbnail?: string;
  videoUrl?: string;
  buttonText?: string;
}

// ==================== Map Types ====================

export interface MapProps {
  embedUrl?: string;
  height?: number | string;
}

// ==================== Footer Types ====================

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export interface FooterProps {
  aboutText?: string;
  socialLinks?: SocialLink[];
  sections?: FooterSection[];
  bottomLinks?: NavItem[];
  copyrightText?: string;
  brandName?: string;
}

// ==================== Header Types ====================

export interface HeaderProps {
  brandName?: string;
  navItems?: NavItem[];
  contactInfo?: ContactInfo;
}

// ==================== Carousel Types ====================

export interface CarouselOptions {
  loop?: boolean;
  align?: "start" | "center" | "end";
  containScroll?: "trimSnaps" | "keepSnaps" | false;
  dragFree?: boolean;
  slidesToScroll?: number;
}

// ==================== Marquee Types ====================

export interface MarqueeProps {
  items: string[];
  speed?: number;
  pauseOnHover?: boolean;
}

export interface RoundedMarqueeProps {
  title?: string;
  title2?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
}

// ==================== Button Types ====================

export interface CircularLinkButtonProps {
  href: string;
  text: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

// ==================== Awards Types ====================

export interface AwardCategory {
  id: string | number;
  title: string;
  description: string;
}

export interface AwardYear {
  year: string;
  isHighlighted?: boolean;
}

export interface AwardsProps {
  category?: string;
  title?: string;
  description?: string;
  years?: AwardYear[];
  categories?: AwardCategory[];
  ctaText?: string;
  ctaLink?: string;
  defaultOpenIndex?: number;
}
