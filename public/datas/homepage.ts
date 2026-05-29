export const siteConfig = {
  name: "yumi",
  topBanner: "Free shipping on all U.S. orders $50+",
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  featuredProducts: {
    title: "Our Featured Products",
    subtitle: "Get the skin you want to feel"
  }
};

export interface HeroSlide {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    subtitle: "ESSENSTIAL ITEMS",
    title: "Beauty Inspired by Real Life",
    description: "Made using clean, non-toxic ingredients, our products are designed for everyone.",
    buttonText: "Shop Now",
    buttonLink: "/shop",
    backgroundImage: "https://picsum.photos/1920/1080?random=101", 
  },
  {
    id: 2,
    subtitle: "NEW ARRIVALS",
    title: "Pure Glow for Your Skin",
    description: "Discover our latest collection of organic skincare products.",
    buttonText: "Explore Now",
    buttonLink: "/shop",
    backgroundImage: "https://picsum.photos/1920/1080?random=102",
  },
  {
    id: 3,
    subtitle: "SUMMER SALE",
    title: "Refresh Your Routine",
    description: "Up to 30% off on all facial oils and cleansers this summer.",
    buttonText: "Shop Sale",
    buttonLink: "/shop",
    backgroundImage: "https://picsum.photos/1920/1080?random=103",
  },
];


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

export const promoBanners: PromoBanner[] = [
  {
    id: 1,
    subtitle: "NEW COLLECTION",
    title: "Intensive Glow C+ Serum",
    buttonText: "Explore More",
    buttonLink: "/shop",
    image: "https://picsum.photos/1000/1000?random=104",
    bgColor: "bg-[#F8F8F8]",
  },
  {
    id: 2,
    title: "25% off Everything",
    description: "Makeup with extended range in colors for every human.",
    buttonText: "Shop Sale",
    buttonLink: "/shop",
    image: "https://picsum.photos/1000/1000?random=105",
    bgColor: "bg-[#CCDCD2]",
  },
];


export interface DiscoveryItem {
  id: number;
  title: string;
  linkText: string;
  linkUrl: string;
  image: string;
}

export const discoveryData = {
  heading: "More to Discover",
  description: "Our bundles were designed to conveniently package your tanning essentials while saving you money.",
  items: [
    {
      id: 1,
      title: "Summer Collection",
      linkText: "Shop Now",
      linkUrl: "/shop",
      image: "https://picsum.photos/1000/1000?random=106",
    },
    {
      id: 2,
      title: "From Our Blog",
      linkText: "Read More",
      linkUrl: "/blog",
      image: "https://picsum.photos/1000/1000?random=107",
    },
  ],
};

export const contactData = {
  header: {
    title: "Keep In Touch with Us",
    description: "We're talking about clean beauty gift sets, of course – and we've got a bouquet of beauties for yourself or someone you love."
  },
  address: {
    title: "Address",
    lines: [
      "3245 Abbot Kinney BLVD -",
      "PH Venice, CA 124",
      "76 East Houston Street",
      "New York City"
    ],
    directionLink: "#"
  },
  contact: {
    title: "Contact",
    mobile: "068 26589 996",
    hotline: "1900 26886",
    email: "hello@grace.com"
  },
  hours: {
    title: "Hour of operation",
    items: [
      { label: "Mon - Fri:", value: "08:30 – 20:00" },
      { label: "Sat & Sun:", value: "09:30 – 21:30" }
    ]
  },
  form: {
    title: "Send A Message",
    buttonText: "Submit"
  }
};

export const privacyPolicyData = {
  title: "Privacy Policy",
  lastUpdated: "January 20, 2026",
  sections: [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, phone number, and shipping address."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you about your orders and promotional offers."
    },
    {
      title: "3. Information Sharing",
      content: "We do not sell your personal information. We may share information with third-party service providers who perform services on our behalf, such as payment processing and shipping."
    }
  ]
};

export const termsConditionsData = {
  title: "Terms & Conditions",
  lastUpdated: "January 20, 2026",
  sections: [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations."
    },
    {
      title: "2. Product Information",
      content: "We attempt to be as accurate as possible in describing our products. However, we do not warrant that product descriptions or other content are accurate, complete, reliable, or error-free."
    },
    {
      title: "3. Shipping & Returns",
      content: "Please refer to our Shipping and Returns policy for detailed information about our delivery process and how to return items."
    }
  ]
};

export const faqData = {
  title: "Frequently Asked Questions",
  description: "Find answers to the most common questions about our products, shipping, and more.",
  categories: [
    {
      name: "Orders & Shipping",
      questions: [
        {
          id: 1,
          question: "How long does shipping take?",
          answer: "Standard shipping typically takes 3-5 business days within the continental US."
        },
        {
          id: 2,
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. International shipping times vary by location."
        },

        {
          id: 3,
          question: "Are your products organic?",
          answer: "Yes, all our products are made with 100% organic and ethically sourced ingredients."
        },
        {
          id: 4,
          question: "What is your return policy?",
          answer: "We offer a 30-day money-back guarantee on all unopened products."
        }
      ]
    }
  ]
};

export const blogData = {
  title: "News",
  posts: [
    {
      id: 1,
      slug: "tips-procedure-to-apply-luxury-beauty-cosmetic-cream",
      title: "Tips & Procedure To Apply Luxury Beauty Cosmetic Cream",
      category: "Natural Cleansers",
      author: "Hiêu Bùi",
      date: "Jan 10, 2025",
      image: "https://picsum.photos/800/800?random=201",
      content: "Luxury beauty products require a specific application technique to ensure maximum effectiveness. Start by cleansing your skin thoroughly with a gentle cleanser. Apply a small amount of the cream to your fingertips and warm it up by rubbing them together. Gently press the cream into your skin, starting from the center of your face and moving outwards. Use upward strokes to lift the skin and improve circulation. Don't forget your neck and décolletage, as these areas often show signs of aging first."
    },
    {
      id: 2,
      slug: "the-best-way-to-select-good-high-end-cosmetic-products",
      title: "The Best Way To Select Good High-End Cosmetic Products",
      category: "Cosmetics",
      author: "Hiêu Bùi",
      date: "Jan 10, 2025",
      image: "https://picsum.photos/800/800?random=202",
      content: "Selecting high-end cosmetic products can be overwhelming given the vast array of options available. The best way to start is by identifying your skin type and specific concerns. Look for products with high-quality, scientifically-proven ingredients. Avoid products with unnecessary fillers or harsh chemicals. It's also helpful to read reviews from reputable sources and, if possible, get samples to test the products on your skin before committing to a full-size purchase."
    },
    {
      id: 3,
      slug: "lightweight-makeup-to-enhance-your-natural-beauty",
      title: "Lightweight Makeup To Enhance Your Natural Beauty",
      category: "Make Up",
      author: "Hiêu Bùi",
      date: "Jan 10, 2025",
      image: "https://picsum.photos/800/800?random=203",
      content: "Lightweight makeup is perfect for achieving a natural, effortless look. Focus on enhancing your best features rather than masking your skin. Start with a tinted moisturizer or a light-coverage foundation to even out your skin tone while still letting your skin breathe. Use a creamy concealer only where needed. A touch of cream blush on the apples of your cheeks will give you a healthy glow. Finish with a coat of mascara and a tinted lip balm for a fresh, polished finish."
    },
    {
      id: 4,
      slug: "herbal-ingredients-and-their-role",
      title: "Herbal Ingredients And Their Role",
      category: "Natural Cleansers",
      author: "Hiêu Bùi",
      date: "Jan 10, 2025",
      image: "https://picsum.photos/800/800?random=204",
      content: "Herbal ingredients have been used for centuries in skincare for their healing and nourishing properties. Ingredients like chamomile and calendula are known for their soothing effects, making them ideal for sensitive skin. Green tea is a powerful antioxidant that helps protect the skin from environmental damage. Aloe vera is highly hydrating and can help soothe sunburns and irritations. Understanding the role of different herbal ingredients can help you choose products that best address your skin's needs."
    },
    {
      id: 5,
      slug: "all-essential-nutrients-your-skin-needs",
      title: "All Essential Nutrients Your Skin Needs",
      category: "Natural Cleansers",
      author: "Hiêu Bùi",
      date: "Jan 10, 2025",
      image: "https://picsum.photos/800/800?random=205",
      content: "Your skin needs a variety of essential nutrients to remain healthy and vibrant. Vitamin C is crucial for collagen production and brightening the skin. Vitamin E is a potent antioxidant that helps protect skin cells from damage. Omega-3 fatty acids help maintain the skin's lipid barrier, keeping it hydrated and plump. Zinc plays a role in wound healing and can help manage acne. A balanced diet rich in these nutrients, along with targeted skincare, will help your skin look its best."
    },
    {
      id: 6,
      slug: "how-to-find-the-best-brow-shape",
      title: "How To Find The Best Brow Shape",
      category: "Make Up",
      author: "Hiêu Bùi",
      date: "Jan 10, 2025",
      image: "https://picsum.photos/800/800?random=206",
      content: "The right brow shape can frame your face and enhance your features. To find the best shape for you, consider your face shape. For example, those with a round face may benefit from higher, more angular arches to add definition. Those with a square face may find that softer, rounded brows help balance their strong jawline. Use a brow pencil to map out the start, arch, and tail of your brows. Avoid over-plucking and aim for a shape that looks natural and complements your features."
    }
  ]
};



