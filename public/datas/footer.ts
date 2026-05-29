export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerData = {
  company: {
    title: "Company",
    description: "Find a location nearest you.",
    phone: "+391 (0)35 2568 4593",
    email: "hello@domain.com",
    storeLink: "/stores"
  },
  usefulLinks: {
    title: "Useful Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "About Us", href: "/about" },
      { label: "Blogs", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ]
  },
  information: {
    title: "Infomation",
    links: [
      
      { label: "FAQ", href: "/faq" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ]
  },
  newsletter: {
    title: "Good emails.",
    description: "Enter your email below to be the first to know about new collections and product launches.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe"
  },
  
  logo: "YUMI",
  socials: [
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "facebook", href: "https://facebook.com" },
    { platform: "tiktok", href: "https://tiktok.com" },
  ]
};
