import { products as mockProducts } from "@/public/datas/products";
import { blogs as mockBlogs } from "@/public/datas/blogs";
import {
  heroSlides as mockHeroSlides,
  siteConfig as mockSiteConfig,
  promoBanners as mockPromoBanners,
  discoveryData as mockDiscoveryData,
  contactData as mockContactData,
  privacyPolicyData as mockPrivacyPolicyData,
  termsConditionsData as mockTermsConditionsData,
  faqData as mockFAQData,
} from "@/public/datas/homepage";
import { aboutData as mockAboutData } from "@/public/datas/about";
import { footerData as mockFooterData } from "@/public/datas/footer";
import type {
  Product,
  Blog,
  HeroSlide,
  SiteConfig,
  PromoBanner,
  DiscoveryData,
  ContactData,
  PrivacyPolicyData,
  TermsConditionsData,
  FAQData,
  AboutData,
  FooterData,
} from "@/src/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

// ─── Products ────────────────────────────────────────────────────────

export async function getProducts(): Promise<Product[]> {
  /*
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
  */
  return mockProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  /*
  const res = await fetch(`${API_BASE}/products?slug=${slug}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const data: Product[] = await res.json();
  return data[0];
  */
  return mockProducts.find((p) => p.slug === slug);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  /*
  const res = await fetch(`${API_BASE}/products?featured=true`);
  if (!res.ok) throw new Error("Failed to fetch featured products");
  return res.json();
  */
  return mockProducts.filter((p) => p.featured);
}

// ─── Blogs ───────────────────────────────────────────────────────────

export async function getBlogs(): Promise<Blog[]> {
  /*
  const res = await fetch(`${API_BASE}/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
  */
  return mockBlogs;
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  /*
  const res = await fetch(`${API_BASE}/blogs?slug=${slug}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  const data: Blog[] = await res.json();
  return data[0];
  */
  return mockBlogs.find((b) => b.slug === slug);
}

// ─── Homepage ────────────────────────────────────────────────────────

export async function getHeroSlides(): Promise<HeroSlide[]> {
  /*
  const res = await fetch(`${API_BASE}/hero-slides`);
  if (!res.ok) throw new Error("Failed to fetch hero slides");
  return res.json();
  */
  return mockHeroSlides;
}

export async function getSiteConfig(): Promise<SiteConfig> {
  /*
  const res = await fetch(`${API_BASE}/site-config`);
  if (!res.ok) throw new Error("Failed to fetch site config");
  return res.json();
  */
  return mockSiteConfig;
}

export async function getPromoBanners(): Promise<PromoBanner[]> {
  /*
  const res = await fetch(`${API_BASE}/promo-banners`);
  if (!res.ok) throw new Error("Failed to fetch promo banners");
  return res.json();
  */
  return mockPromoBanners;
}

export async function getDiscoveryData(): Promise<DiscoveryData> {
  /*
  const res = await fetch(`${API_BASE}/discovery`);
  if (!res.ok) throw new Error("Failed to fetch discovery data");
  return res.json();
  */
  return mockDiscoveryData;
}

// ─── Static Pages ────────────────────────────────────────────────────

export async function getContactData(): Promise<ContactData> {
  /*
  const res = await fetch(`${API_BASE}/contact`);
  if (!res.ok) throw new Error("Failed to fetch contact data");
  return res.json();
  */
  return mockContactData;
}

export async function getPrivacyPolicyData(): Promise<PrivacyPolicyData> {
  /*
  const res = await fetch(`${API_BASE}/privacy-policy`);
  if (!res.ok) throw new Error("Failed to fetch privacy policy");
  return res.json();
  */
  return mockPrivacyPolicyData;
}

export async function getTermsConditionsData(): Promise<TermsConditionsData> {
  /*
  const res = await fetch(`${API_BASE}/terms-conditions`);
  if (!res.ok) throw new Error("Failed to fetch terms & conditions");
  return res.json();
  */
  return mockTermsConditionsData;
}

export async function getFAQData(): Promise<FAQData> {
  /*
  const res = await fetch(`${API_BASE}/faq`);
  if (!res.ok) throw new Error("Failed to fetch FAQ data");
  return res.json();
  */
  return mockFAQData;
}

export async function getAboutData(): Promise<AboutData> {
  /*
  const res = await fetch(`${API_BASE}/about`);
  if (!res.ok) throw new Error("Failed to fetch about data");
  return res.json();
  */
  return mockAboutData as AboutData;
}

export async function getFooterData(): Promise<FooterData> {
  /*
  const res = await fetch(`${API_BASE}/footer`);
  if (!res.ok) throw new Error("Failed to fetch footer data");
  return res.json();
  */
  return mockFooterData;
}
