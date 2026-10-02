import { ProjectItem } from '../core/types/portfolio';

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    slug: 'social-media-growth-matrix',
    title: 'Aura Fitness & Wellness',
    category: 'marketing',
    categoryLabel: 'Social Media Marketing',
    client: 'Aura Lifestyle Group',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    summary: 'Omnichannel social media campaign and influencer strategy that drove a 340% increase in active gym memberships across 4 metropolitan locations.',
    overview: 'Aura Lifestyle Group needed to reposition its brand to target affluent young professionals while streamlining membership sign-ups through interactive Instagram and TikTok funnels.',
    challenge: 'High cost per acquisition and fragmented brand voice across 4 separate regional social accounts with declining organic reach.',
    solution: 'PRO SETUP unified their visual branding, produced 45 cinematic vertical reels featuring real trainers, and engineered targeted Meta Advantage+ lead funnels with instant WhatsApp booking.',
    servicesUsed: ['Social Media Management', 'Paid Advertising', 'Video Reels Production', 'Lead Generation Funnel'],
    techStack: ['Meta Ads Manager', 'TikTok Spark Ads', 'Google Analytics 4', 'ManyChat'],
    results: [
      { label: 'New Memberships', value: '1,420+', improvement: '+340%' },
      { label: 'Return On Ad Spend', value: '5.2x', improvement: '+180%' },
      { label: 'Video Reel Views', value: '4.8M', improvement: '+450%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true
  },
  {
    id: 'proj-2',
    slug: 'lumina-luxury-branding',
    title: 'Lumina Architecture & Interiors',
    category: 'branding',
    categoryLabel: 'Branding & Design',
    client: 'Lumina Studio',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Complete brand identity, bespoke typography, embossed corporate stationery, and luxury portfolio presentation book for an elite architectural firm.',
    overview: 'Lumina architects needed an iconic corporate identity that reflects minimalist brutalist elegance and attracts multi-million dollar residential developments.',
    challenge: 'Existing branding felt dated, and inconsistent print collateral failed to reflect the firm’s ultra-premium design standards.',
    solution: 'Designed an architectural monogram logo based on golden ratio grids, crafted custom stationery with blind debossing and gold foil accents, and built an interactive digital design book.',
    servicesUsed: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Print & Packaging', 'Stationery Design'],
    techStack: ['Adobe Illustrator', 'Figma', 'InDesign', 'Specialty Foil Printing'],
    results: [
      { label: 'Brand Value Perception', value: 'Top 5%', improvement: 'Luxury Benchmark' },
      { label: 'Major Commercial Deals Closed', value: '$8.4M', improvement: 'In 6 Months' },
      { label: 'Design Industry Recognition', value: 'Winner', improvement: 'MENA Design Awards' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb18f156f?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true
  },
  {
    id: 'proj-3',
    slug: 'nexus-logistics-cloud-platform',
    title: 'Nexus Global Freight & Logistics',
    category: 'software',
    categoryLabel: 'Web & Mobile Development',
    client: 'Nexus Freight International',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    summary: 'Cloud-native fleet management ERP, real-time shipment GPS tracking, and Flutter driver mobile app processing over 50,000 monthly shipments.',
    overview: 'Nexus required an end-to-end modernization of their legacy logistics software to automate dispatching, cargo tracking, and automated client customs invoicing.',
    challenge: 'Legacy system suffered frequent downtime, manual paper dispatch errors, and delayed freight customs clearance notifications.',
    solution: 'Architected a Next.js real-time dispatch dashboard, Flutter iOS/Android driver app with offline waypoint caching, and Firebase/Supabase backend with automated SMS/WhatsApp alerts.',
    servicesUsed: ['Custom Software Development', 'Flutter Mobile App', 'Dashboard Engineering', 'Cloud Solutions', 'REST API Integration'],
    techStack: ['Flutter', 'Dart', 'React', 'TypeScript', 'Node.js', 'Firebase', 'PostgreSQL', 'Docker'],
    results: [
      { label: 'Dispatch Latency Reduction', value: '-65%', improvement: 'Saved 4 hrs/day' },
      { label: 'Monthly Active Shipments', value: '52,000+', improvement: '+120%' },
      { label: 'Platform Availability SLA', value: '99.99%', improvement: 'Zero Downtime' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true
  },
  {
    id: 'proj-4',
    slug: 'apex-industrial-cctv-network',
    title: 'Apex Manufacturing Logistics Hub',
    category: 'security',
    categoryLabel: 'Security Systems',
    client: 'Apex Industrial Zone',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    summary: 'Turnkey surveillance deployment featuring 64 4K AI-powered IP cameras, centralized NVR storage, thermal perimeter fencing, and biometric access control.',
    overview: 'A 180,000 sq. ft manufacturing compound required total perimeter surveillance, automated license plate recognition at gates, and zero-latency remote monitoring.',
    challenge: 'Harsh industrial desert dust conditions, multiple blind spots in warehouse corridors, and no existing high-speed network infrastructure.',
    solution: 'Engineered a fiber-optic backbone with Cat7 armored cabling, installed 64 IP67-rated vandal-proof PTZ cameras with smart motion tracking, and set up a multi-screen central monitoring control center.',
    servicesUsed: ['CCTV Camera Installation', 'IP & Network Cameras', 'NVR Central Storage', 'Biometric Access Control', 'Dedicated Cabling'],
    techStack: ['Hikvision 4K DarkFighter', 'Synology Surveillance Station', 'Ubiquiti UniFi PoE Switches', 'Cat7 Shielded Cabling'],
    results: [
      { label: 'Facility Perimeter Coverage', value: '100%', improvement: 'Zero Blind Spots' },
      { label: 'Incident Detection Speed', value: '< 30s', improvement: 'AI Smart Alerts' },
      { label: 'Storage Retention Window', value: '120 Days', improvement: 'RAID 6 Redundancy' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true
  },
  {
    id: 'proj-5',
    slug: 'solis-cinematic-product-launch',
    title: 'Solis Smart Coffee Maker Commercial',
    category: 'photography',
    categoryLabel: 'Photography & Video',
    client: 'Solis Appliances Global',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    summary: 'Cinematic 4K commercial, slow-motion fluid dynamics, studio product catalog photography, and viral launch reel campaign that sold out pre-orders in 48 hours.',
    overview: 'Solis needed an aspirational product video highlighting the tactile beauty of machined aluminum, steam extraction physics, and seamless smartphone brewing controls.',
    challenge: 'Capturing complex reflective metal surfaces, macro steam plumes, and pouring liquids with pixel-perfect commercial lighting.',
    solution: 'Deployed high-speed cinema cameras, robotic motion-control arms, professional barista styling, and DaVinci Resolve color science for a moody, high-end European aesthetic.',
    servicesUsed: ['Commercial Photography', 'Product Videos', 'Cinematic Color Grading', 'Motion Graphics', 'Social Media Reels'],
    techStack: ['Sony FX6 Cinema Line', 'DaVinci Resolve Studio', 'Aputure 600d Lighting', 'Macro Cinema Primes'],
    results: [
      { label: 'Initial Inventory Sold Out', value: '48 Hours', improvement: 'Launch Record' },
      { label: 'Commercial Views Across Ads', value: '3.2M', improvement: '94% Completion Rate' },
      { label: 'Organic Shares on Instagram', value: '14,000+', improvement: 'Viral Reach' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true
  },
  {
    id: 'proj-6',
    slug: 'velox-e-commerce-advertising-scale',
    title: 'Velox Eyewear Direct-To-Consumer Scale',
    category: 'advertising',
    categoryLabel: 'Advertising & Ads',
    client: 'Velox Optical Brand',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    summary: 'Full-funnel digital advertising sprint spanning Meta, TikTok, and Google Ads scaling monthly gross revenue from $25,000 to $180,000 in under 90 days.',
    overview: 'Velox was struggling with stagnant sales and soaring cost-per-click. PRO SETUP stepped in to overhaul their entire creative and algorithmic media buying strategy.',
    challenge: 'High customer cart abandonment, low click-through rates on generic static ads, and poor attribution tracking.',
    solution: 'Designed 60+ UGC-style hook variations, implemented server-side Conversions API (CAPI), and launched dynamic retargeting funnels with limited-time bundle promotions.',
    servicesUsed: ['Performance Marketing', 'Paid Advertising', 'Ad Creative Production', 'Conversion Rate Optimization'],
    techStack: ['Meta Ads API', 'TikTok Ads Manager', 'Shopify Plus', 'Klaviyo', 'Triple Whale'],
    results: [
      { label: 'Monthly Revenue Growth', value: '$180K', improvement: '+620%' },
      { label: 'Blended ROAS', value: '4.9x', improvement: 'Sustained over 90 days' },
      { label: 'Customer Acquisition Cost', value: '-42%', improvement: 'Profit Margin Doubled' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509695503495-cd2786ca1c42?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true
  }
];
