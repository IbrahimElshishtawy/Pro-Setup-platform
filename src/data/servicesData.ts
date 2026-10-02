import { ServiceDetail } from '../core/types/services';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    shortTitle: 'Digital Marketing',
    tagline: 'Scale Your Reach & Drive Predictable Revenue',
    summary: 'Data-driven marketing campaigns, social media management, paid advertising, and conversion rate optimization tailored to dominate your industry.',
    description: 'We craft and execute bespoke digital marketing ecosystems that transform casual scrollers into loyal, high-lifetime-value clients. Combining behavioral psychographics with granular algorithmic targeting, our team scales brands across Meta, Google, TikTok, and LinkedIn.',
    iconName: 'Megaphone',
    accentColor: '#0066FF',
    heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80'
    ],
    subServices: [
      { name: 'Social Media Management', description: 'Complete monthly handling of Instagram, TikTok, LinkedIn, and Facebook profiles.' },
      { name: 'Social Media Strategy', description: 'Content pillars, audience segmentation, tone of voice, and competitive benchmarks.' },
      { name: 'Content Creation & Planning', description: 'High-converting copywriting, carousels, infographics, and scheduled posting.' },
      { name: 'Paid Advertising (PPC)', description: 'Laser-targeted ads on Facebook, Instagram, Google Search/Display, and TikTok.' },
      { name: 'Lead Generation Funnels', description: 'High-intent lead capture pipelines designed to feed sales teams with qualified prospects.' },
      { name: 'Campaign Optimization & Analytics', description: 'Continuous A/B split testing, pixel tracking, ROAS scaling, and weekly reporting.' },
      { name: 'Brand Growth Strategy', description: 'Omnichannel scaling blueprints to expand market share and brand authority.' }
    ],
    deliverables: [
      'Monthly Content Calendars (30+ assets)',
      'Omnichannel Paid Ad Campaigns Setup',
      'Custom Bi-Weekly Performance Dashboards',
      'Audience Persona & Competitor Reports',
      'Conversion Tracking & Pixel Integrations'
    ],
    technologies: ['Meta Ads Manager', 'Google Ads', 'TikTok Ads Manager', 'Google Analytics 4', 'HubSpot', 'Looker Studio'],
    pipeline: [
      { step: '01', title: 'Audience Audit', desc: 'Deep dive into target demographics, psychographics, and competitor ad spend.' },
      { step: '02', title: 'Creative Hook Production', desc: 'Developing attention-grabbing visual hooks and high-converting copy.' },
      { step: '03', title: 'Campaign Launch', desc: 'Configuring precise pixel events, custom audiences, and budget allocation.' },
      { step: '04', title: 'Algorithmic Optimization', desc: 'Scaling winning ad sets and cutting unprofitable variations to maximize ROAS.' }
    ],
    metricsHighlight: [
      { label: 'Avg. ROAS Achieved', value: '4.8x' },
      { label: 'Ad Impressions Managed', value: '15M+' },
      { label: 'Qualified Leads Generated', value: '42K+' },
      { label: 'Client Retention Rate', value: '96%' }
    ]
  },
  {
    id: 'design-branding',
    slug: 'design-branding',
    title: 'Design & Visual Branding',
    shortTitle: 'Design & Branding',
    tagline: 'Distinctive Identities That Command Authority',
    summary: 'World-class brand identities, UI/UX product design, high-end packaging, and motion graphics that set your business apart from competition.',
    description: 'A great brand is unforgettable. We sculpt iconic corporate identities, intuitive digital interfaces, and tactile physical collateral that resonate with premium audiences. From foundational typography to complete design systems, PRO SETUP ensures unmatched visual elegance.',
    iconName: 'Palette',
    accentColor: '#00D2FF',
    heroImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
    ],
    subServices: [
      { name: 'Logo Design & Symbolism', description: 'Timeless, scalable insignia engineered with geometric precision.' },
      { name: 'Full Brand Identity Systems', description: 'Color architecture, typography hierarchy, visual motifs, and stationery kits.' },
      { name: 'Brand Guidelines Book', description: 'Comprehensive rules manual ensuring cross-platform brand consistency.' },
      { name: 'Social Media & Advertising Graphics', description: 'Scroll-stopping feed templates, story formats, and promotional banners.' },
      { name: 'UI/UX Design for Web & Mobile', description: 'User journey mapping, wireframing, high-fidelity Figma prototypes, and design tokens.' },
      { name: 'Packaging & Print Materials', description: 'Luxury boxes, labels, business cards, corporate brochures, and roll-up banners.' },
      { name: 'Motion Graphics & 3D Assets', description: 'Animated logo stings, product reveal animations, and micro-interactions.' }
    ],
    deliverables: [
      'Master Brand Guidelines Manual (PDF & Web)',
      'Vector Logo Suite (.SVG, .AI, .EPS, .PNG, .PDF)',
      'Full Design System with Figma Component Library',
      'Ready-to-Print Packaging & Stationery Files',
      'Complete Social Media Asset Kit'
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects', 'Blender', 'Cinema 4D'],
    pipeline: [
      { step: '01', title: 'Brand Discovery', desc: 'Uncovering brand values, market positioning, and aesthetic vision.' },
      { step: '02', title: 'Concept Exploration', desc: 'Developing moodboards, sketches, and 3 distinct visual directions.' },
      { step: '03', title: 'Refinement & Systems', desc: 'Polishing typography, color harmonies, and responsive components.' },
      { step: '04', title: 'Final Handover', desc: 'Packaging all production-ready files with strict brand compliance docs.' }
    ],
    metricsHighlight: [
      { label: 'Brand Identities Built', value: '45+' },
      { label: 'Design Awards & Recognitions', value: '12' },
      { label: 'Prototypes Delivered', value: '80+' },
      { label: 'Client Satisfaction', value: '100%' }
    ]
  },
  {
    id: 'software-technology',
    slug: 'software-technology',
    title: 'Software & Technology',
    shortTitle: 'Software & Tech',
    tagline: 'Enterprise-Grade Software, Web & Mobile Platforms',
    summary: 'Full-stack web engineering, native & cross-platform mobile apps (Flutter), scalable cloud architectures, custom ERP/CRM systems, and secure API integrations.',
    description: 'We architect lightning-fast, ultra-secure, and endlessly scalable software solutions that automate operations and power modern businesses. From high-conversion SaaS web applications to mission-critical business management systems, our code is built to thrive under heavy enterprise workloads.',
    iconName: 'Code2',
    accentColor: '#0066FF',
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ],
    subServices: [
      { name: 'Custom Web Application Development', description: 'Next.js, React, TypeScript, and modern headless frontends with sub-second load times.' },
      { name: 'Mobile App Development (Flutter & React Native)', description: 'Smooth 60fps iOS and Android applications with offline sync and push notifications.' },
      { name: 'Enterprise Business Management Systems', description: 'Tailored ERP, inventory control, and employee management portals.' },
      { name: 'High-Volume E-Commerce Platforms', description: 'Custom storefronts, automated checkout, order fulfillment, and multi-currency support.' },
      { name: 'Interactive Dashboards & Analytics', description: 'Real-time telemetry, WebSocket streaming, and interactive data visualization charts.' },
      { name: 'REST & GraphQL API Engineering', description: 'Robust microservices, webhook dispatchers, and third-party integrations.' },
      { name: 'Cloud Infrastructure & Database Architecture', description: 'Google Cloud, Firebase, Supabase, PostgreSQL, Docker, and CI/CD pipelines.' },
      { name: 'Payment Gateway Integration', description: 'Stripe, Paymob, Fawry, PayPal, and Apple Pay integrations with automated invoicing.' },
      { name: '24/7 Monitoring & System Maintenance', description: '99.99% uptime guarantees, security audits, backups, and proactive updates.' }
    ],
    deliverables: [
      'Production-Ready Cloud Deployments (GCP / AWS / Firebase)',
      'Cross-Platform iOS & Android App Store Builds',
      'Complete Git Repository with Clean Architecture & Documentation',
      'Automated CI/CD Deployment Pipelines',
      'Comprehensive Admin Management Dashboard'
    ],
    technologies: ['Flutter', 'Dart', 'React', 'TypeScript', 'Node.js', 'Firebase', 'Supabase', 'PostgreSQL', 'Docker', 'Google Cloud'],
    pipeline: [
      { step: '01', title: 'Architecture Blueprint', desc: 'System requirements, entity relationship diagrams, and cloud topology.' },
      { step: '02', title: 'Agile Sprint Development', desc: 'Milestone-driven code sprints with continuous test automation.' },
      { step: '03', title: 'Security & QA Testing', desc: 'Penetration tests, load stress testing, and cross-device validation.' },
      { step: '04', title: 'Production Launch & SLA', desc: 'Zero-downtime deployment with 24/7 telemetry monitoring.' }
    ],
    metricsHighlight: [
      { label: 'System Uptime SLA', value: '99.99%' },
      { label: 'Lines of Clean Code', value: '500K+' },
      { label: 'APIs & Gateways Integrated', value: '60+' },
      { label: 'Average Page Load', value: '< 0.8s' }
    ]
  },
  {
    id: 'security-surveillance',
    slug: 'security-surveillance',
    title: 'Security & Surveillance',
    shortTitle: 'Security & CCTV',
    tagline: 'Intelligent Surveillance & Access Defense Systems',
    summary: 'Enterprise IP camera installations, DVR/NVR surveillance networks, smart access control, remote live monitoring, and proactive hardware maintenance.',
    description: 'Protect your business, facilities, and assets with military-grade surveillance and access security infrastructure. Seamlessly integrated into PRO SETUP’s technological ecosystem, we deliver 4K AI-assisted cameras, thermal sensors, biometric entry systems, and encrypted remote feeds on mobile and web.',
    iconName: 'ShieldCheck',
    accentColor: '#00D2FF',
    heroImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
    ],
    subServices: [
      { name: 'CCTV Camera Installation', description: 'Certified commercial and industrial deployment of dome, bullet, and PTZ cameras.' },
      { name: 'IP & Network Cameras', description: 'High-definition 4K optical clarity with night vision, WDR, and AI human detection.' },
      { name: 'Indoor & Outdoor Weatherproof Systems', description: 'IP67/IK10 rated vandal-proof hardware resistant to extreme heat and dust.' },
      { name: 'DVR / NVR Storage Infrastructure', description: 'Scalable multi-terabyte continuous RAID recording with cloud backup options.' },
      { name: 'Dedicated Network & PoE Setup', description: 'Gigabit PoE switches, structured Cat6/Cat7 cabling, and isolated VLANs.' },
      { name: 'Smart Biometric Access Control', description: 'Facial recognition, RFID cards, and digital attendance tracking systems.' },
      { name: '24/7 Mobile Remote Monitoring', description: 'Encrypted live video streaming on your smartphone, tablet, or web dashboard.' },
      { name: 'Security Audits & Hardware Upgrades', description: 'Modernizing legacy analog systems into high-definition digital networks.' }
    ],
    deliverables: [
      'Complete Hardware Blueprint & Camera Coverage Map',
      'Fully Configured NVR/DVR Storage with Local + Cloud Sync',
      'Mobile & Desktop Secure Remote Access Apps Setup',
      'Structured Cabling Certification & Labeling',
      'Preventative Maintenance Contract & Hardware Warranty'
    ],
    technologies: ['Hikvision', 'Dahua', 'Ubiquiti UniFi', 'Axis Communications', 'PoE Gigabit Switches', 'Synology Surveillance'],
    pipeline: [
      { step: '01', title: 'Site Inspection & Blind Spot Audit', desc: 'On-site survey to map camera angles, focal lengths, and network runs.' },
      { step: '02', title: 'Cabling & Mounting', desc: 'Discreet, industrial-grade conduit installation and precision camera positioning.' },
      { step: '03', title: 'NVR & Network Hardening', desc: 'Configuring VLAN isolation, encryption certificates, and recording schedules.' },
      { step: '04', title: 'Handover & Mobile Pairing', desc: 'Staff training, mobile app provisioning, and ongoing maintenance dispatch.' }
    ],
    metricsHighlight: [
      { label: 'Cameras Installed', value: '450+' },
      { label: 'Facility Sq. Footage Secured', value: '250K+' },
      { label: 'Storage Retention SLA', value: '90 Days' },
      { label: 'Response Time for Support', value: '< 2 Hrs' }
    ]
  },
  {
    id: 'photography-video',
    slug: 'photography-video',
    title: 'Photography & Video Production',
    shortTitle: 'Photo & Video',
    tagline: 'Cinematic Storytelling That Commands Attention',
    summary: 'High-end commercial photography, 4K promotional videos, viral social media reels, corporate documentaries, and post-production color grading.',
    description: 'Visual media is the heartbeat of consumer desire. Our in-house production studio combines RED and Sony FX cinema cameras with art directors, lighting masters, and sound designers to create cinematic imagery that elevates brand perception and drives direct conversions.',
    iconName: 'Camera',
    accentColor: '#0066FF',
    heroImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80'
    ],
    subServices: [
      { name: 'Commercial & Product Photography', description: 'Studio e-commerce cutouts, luxury lifestyle staging, and macro product detail.' },
      { name: 'Corporate & Executive Portraits', description: 'Polished team headshots, board member portraits, and workplace culture imagery.' },
      { name: 'Promotional & Brand Commercials', description: 'High-impact 30s to 90s TVC and web commercials designed for virality.' },
      { name: 'Social Media Reels & TikTok Production', description: 'Fast-paced, hook-driven vertical videos formatted for maximum engagement.' },
      { name: 'Cinematic Video Editing & Color Grading', description: 'Hollywood-standard DaVinci Resolve color science and dynamic sound design.' },
      { name: 'Corporate Events & Conference Coverage', description: 'Multi-camera live streaming, on-site recap reels, and keynote documentation.' },
      { name: 'Behind-The-Scenes (BTS) Production', description: 'Authentic storytelling content highlighting craft and company milestones.' }
    ],
    deliverables: [
      '4K & 1080p Final Master Video Exports (Horizontal & 9:16 Vertical)',
      'High-Resolution Retouched RAW Photos (Web & Print Resolution)',
      'Royalty-Free Commercial Soundtrack & Sound Design Stems',
      'B-Roll Footage Library for Ongoing Social Posts',
      'Full Commercial Usage Rights'
    ],
    technologies: ['Sony FX6 / FX3 Cinema Line', 'DaVinci Resolve Studio', 'Adobe Premiere Pro', 'Aputure Lighting', 'DJI Ronin Gimbals'],
    pipeline: [
      { step: '01', title: 'Moodboard & Scripting', desc: 'Developing storyboards, shot lists, casting, and location scouting.' },
      { step: '02', title: 'Production Shoot Day', desc: 'Full crew shoot with cinema lighting, audio recording, and precision gimbal work.' },
      { step: '03', title: 'Post-Production & Grading', desc: 'Pacing edit, cinematic color correction, Foley sound design, and motion titles.' },
      { step: '04', title: 'Review & Multi-Format Render', desc: 'Collaborative feedback cycles and rendering in all web and broadcast aspect ratios.' }
    ],
    metricsHighlight: [
      { label: 'Video Views Generated', value: '25M+' },
      { label: 'Commercial Projects Shot', value: '120+' },
      { label: 'High-Res Deliverables', value: '10K+' },
      { label: 'Production Equipment Spec', value: 'Cinema 4K' }
    ]
  },
  {
    id: 'advertising',
    slug: 'advertising',
    title: 'Advertising & Performance Campaigns',
    shortTitle: 'Advertising',
    tagline: 'Full-Funnel Campaigns That Multiply Your Ad Spend',
    summary: 'Strategic cross-channel advertising, creative concept development, performance marketing, programmatic buying, and conversion optimization.',
    description: 'Advertising is not an expense — when engineered properly, it is your highest-yield capital investment. PRO SETUP unites psychological creative direction with rigorous algorithmic experimentation to consistently generate outsized ROI for retail, B2B, and digital clients.',
    iconName: 'TrendingUp',
    accentColor: '#00D2FF',
    heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    subServices: [
      { name: 'Omnichannel Digital Advertising', description: 'Coordinated ads across Google, Meta, TikTok, YouTube, and LinkedIn.' },
      { name: 'Commercial & Video Advertisements', description: 'Direct-response video creatives engineered to stop thumbs in under 2 seconds.' },
      { name: 'Creative Concept Campaigns', description: 'Big idea development that establishes market leadership and brand fame.' },
      { name: 'Product Launch Blitz Campaigns', description: 'High-intensity multi-week launches designed to sell out inventory rapidly.' },
      { name: 'Performance Marketing & Retargeting', description: 'Dynamic catalog ads, abandoned cart recovery, and VIP customer win-backs.' },
      { name: 'Audience Segmentation & LTV Modeling', description: 'Predictive cohort targeting based on real customer lifetime value metrics.' }
    ],
    deliverables: [
      'Multi-Format Ad Creative Matrix (Over 50+ Ad Variations)',
      'Direct-Response Copywriting Suite',
      'Live ROAS Tracking Dashboard',
      'Audience Persona & Psychographic Map',
      'Comprehensive Post-Campaign Debrief Report'
    ],
    technologies: ['Meta Advantage+', 'Google Performance Max', 'TikTok Spark Ads', 'Klaviyo', 'Triple Whale', 'Hyros Tracking'],
    pipeline: [
      { step: '01', title: 'Campaign Big Idea', desc: 'Formulating the emotional hook and unique value proposition.' },
      { step: '02', title: 'Creative Production', desc: 'Producing static, motion, and video ad creatives tailored to each platform.' },
      { step: '03', title: 'Launch & Audience Test', desc: 'Deploying targeted campaigns with automated budget pacing.' },
      { step: '04', title: 'Aggressive ROAS Scaling', desc: 'Doubling down on winning ad hooks and driving down Cost-Per-Acquisition.' }
    ],
    metricsHighlight: [
      { label: 'Ad Spend Managed', value: '$2.5M+' },
      { label: 'Average ROAS Return', value: '4.8x' },
      { label: 'Reduction in CPA', value: '-38%' },
      { label: 'Conversion Lift', value: '+142%' }
    ]
  }
];
