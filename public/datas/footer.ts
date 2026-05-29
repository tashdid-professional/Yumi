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
    description: "Find a location nearest you. See Our Stores",
    phone: "+391 (0)35 2568 4593",
    email: "hello@domain.com",
    storeLink: "/stores"
  },
  usefulLinks: {
    title: "Useful Links",
    links: [
      { label: "New Products", href: "/shop/new" },
      { label: "Best Sellers", href: "/shop/best-sellers" },
      { label: "Our Blog", href: "/blog" },
      { label: "Online Gift Card", href: "/gift-cards" },
    ]
  },
  information: {
    title: "Infomation",
    links: [
      { label: "Start A Return", href: "/returns" },
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping FAQ", href: "/faq" },
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
  copyright: "© Glowing 2025 | Powered by Shopify",
  logo: "GLOWING",
  socials: [
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "facebook", href: "https://facebook.com" },
    { platform: "tiktok", href: "https://tiktok.com" },
  ]
};
