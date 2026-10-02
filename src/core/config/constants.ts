export const COMPANY_INFO = {
  name: "PRO SETUP",
  legalName: "PRO SETUP Commercial Solutions",
  tagline: "Your Vision. Our Setup.",
  positioning: "All Your Business Needs in One Place",
  subDescription: "PRO SETUP is a full-service commercial setup and digital solutions company, offering everything your business needs to grow — from digital marketing, branding, and software development to CCTV security, media production, and commercial advertising.",
  detailedDescription: "PRO SETUP brings technology, creativity, marketing, and security together under one roof to help businesses build, scale, and lead their sectors. From conceptual branding to complete digital and physical infrastructure, we engineer complete business setups.",
  contact: {
    phone: "YOUR_PHONE",
    phoneDisplay: "YOUR_PHONE",
    whatsapp: "YOUR_WHATSAPP_LINK",
    whatsappNumber: "YOUR_PHONE",
    email: "YOUR_EMAIL",
    address: "YOUR_LOCATION",
    workingHours: "Sunday – Thursday: 9:00 AM – 6:00 PM (EET)",
  },
  social: {
    facebook: "YOUR_FACEBOOK_LINK",
    instagram: "YOUR_INSTAGRAM_LINK",
    tiktok: "YOUR_TIKTOK_LINK",
    linkedin: "YOUR_LINKEDIN_LINK",
    youtube: "YOUR_YOUTUBE_LINK",
    whatsapp: "YOUR_WHATSAPP_LINK",
  },
  stats: [
    { value: 6, suffix: "+", label: "Integrated Sectors", description: "All in One Place under one roof" },
    { value: 100, suffix: "%", label: "Full Accountability", description: "Single dedicated partnership & SLA" },
    { value: 24, suffix: "/7", label: "Support & Uptime", description: "Proactive management & surveillance" },
    { value: 0, suffix: "", label: "Vendor Hassle", description: "Zero fragmentation between separate agencies" },
  ],
  pillars: [
    { title: "Integrated Services", desc: "All in One Place — eliminate vendor coordination hassle" },
    { title: "Technical Precision", desc: "Enterprise-grade code, modern architectures, and robust security" },
    { title: "Creative Mastery", desc: "Distinctive brand identities and cinematic commercial content" },
    { title: "Measurable Impact", desc: "Data-backed campaigns and systems engineered for high ROI" },
  ],
};

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Services", href: "#services" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "about", label: "About", href: "#about" },
  { id: "process", label: "Process", href: "#process" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const MEGA_MENU_CATEGORIES = [
  {
    id: "digital",
    title: "Digital",
    shortDesc: "Growth, audience acquisition & viral content",
    icon: "TrendingUp",
    targetPage: "digital-marketing",
    services: [
      { name: "Digital Marketing", path: "digital-marketing" },
      { name: "Social Media", path: "digital-marketing" },
      { name: "Advertising", path: "advertising" },
      { name: "Content Creation", path: "digital-marketing" },
    ],
  },
  {
    id: "creative",
    title: "Creative",
    shortDesc: "Iconic brand identity, UI/UX & cinematic video",
    icon: "Palette",
    targetPage: "design-branding",
    services: [
      { name: "Branding", path: "design-branding" },
      { name: "Graphic Design", path: "design-branding" },
      { name: "UI/UX Design", path: "design-branding" },
      { name: "Photography", path: "photography-video" },
      { name: "Video Production", path: "photography-video" },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    shortDesc: "Scalable web, mobile apps & custom software",
    icon: "Code2",
    targetPage: "software-technology",
    services: [
      { name: "Web Development", path: "software-technology" },
      { name: "Mobile Apps", path: "software-technology" },
      { name: "Custom Software", path: "software-technology" },
      { name: "Cloud Solutions", path: "software-technology" },
    ],
  },
  {
    id: "security",
    title: "Security",
    shortDesc: "Commercial CCTV, access control & monitoring",
    icon: "ShieldCheck",
    targetPage: "security-surveillance",
    services: [
      { name: "CCTV", path: "security-surveillance" },
      { name: "Security Systems", path: "security-surveillance" },
      { name: "Network Setup", path: "security-surveillance" },
      { name: "Access Control", path: "security-surveillance" },
    ],
  },
];

export const SERVICE_CATEGORIES = [
  { id: "digital-marketing", name: "Digital Marketing", shortDesc: "Social Media, Paid Ads & Growth" },
  { id: "design-branding", name: "Design & Branding", shortDesc: "Brand Identity, UI/UX & Packaging" },
  { id: "software-technology", name: "Software & Technology", shortDesc: "Web, Mobile Apps & Cloud Systems" },
  { id: "security-surveillance", name: "Security & Surveillance", shortDesc: "CCTV, Access Control & NVR" },
  { id: "photography-video", name: "Photography & Production", shortDesc: "Cinematic Video & Commercial Media" },
  { id: "advertising", name: "Advertising Campaigns", shortDesc: "Performance Marketing & Creative Ads" },
];
