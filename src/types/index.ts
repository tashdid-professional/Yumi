export interface SiteConfig {
  name: string;
  topBanner: string;
  navLinks: NavLink[];
  featuredProducts: {
    title: string;
    subtitle: string;
  };
}

export interface NavLink {
  name: string;
  href: string;
}

export interface HeroSlide {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

export interface PromoBanner {
  id: number;
  subtitle?: string;
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  bgColor: string;
}

export interface DiscoveryItem {
  id: number;
  title: string;
  linkText: string;
  linkUrl: string;
  image: string;
}

export interface DiscoveryData {
  heading: string;
  description: string;
  items: DiscoveryItem[];
}

export interface ProductVariant {
  name: string;
  image: string;
  gallery: string[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: "Sale" | "New";
  description: string;
  slug: string;
  tags: string[];
  gallery: string[];
  videos: string[];
  purchaseLink?: string;
  variantType?: string;
  variants?: ProductVariant[];
  featured: boolean;
}

export interface Blog {
  id: number;
  slug: string;
  category: string;
  author: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  isFeatured?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterCompany {
  title: string;
  description: string;
  phone: string;
  email: string;
  storeLink: string;
}

export interface FooterLinksSection {
  title: string;
  links: FooterLink[];
}

export interface FooterNewsletter {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
}

export interface FooterSocial {
  platform: string;
  href: string;
}

export interface FooterData {
  company: FooterCompany;
  usefulLinks: FooterLinksSection;
  information: FooterLinksSection;
  newsletter: FooterNewsletter;
  logo: string;
  socials: FooterSocial[];
}

export interface AddressData {
  title: string;
  lines: string[];
  directionLink: string;
}

export interface ContactInfo {
  title: string;
  mobile: string;
  hotline: string;
  email: string;
}

export interface HoursItem {
  label: string;
  value: string;
}

export interface HoursData {
  title: string;
  items: HoursItem[];
}

export interface FormData {
  title: string;
  placeholders: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  buttonText: string;
}

export interface ContactData {
  header: {
    title: string;
    description: string;
  };
  address: AddressData;
  contact: ContactInfo;
  hours: HoursData;
  form: FormData;
}

export interface PolicySection {
  title: string;
  content: string;
}

export interface PrivacyPolicyData {
  title: string;
  lastUpdated: string;
  sections: PolicySection[];
}

export interface TermsConditionsData {
  title: string;
  lastUpdated: string;
  sections: PolicySection[];
}

export interface FAQQuestion {
  id: number;
  question: string;
  answer: string;
}

export interface FAQCategory {
  name: string;
  questions: FAQQuestion[];
}

export interface FAQData {
  title: string;
  description: string;
  categories: FAQCategory[];
}

export interface AboutHero {
  subtitle: string;
  title: string;
  backgroundImage: string;
}

export interface AboutMissionStatement {
  icon: string;
  title: string;
  description: string;
}

export interface AboutSection {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

export interface AboutData {
  hero: AboutHero;
  missionStatement: AboutMissionStatement;
  sections: AboutSection[];
}
