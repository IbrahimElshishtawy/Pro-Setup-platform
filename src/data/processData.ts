import { ProcessStep } from '../core/types/common';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    number: '01',
    title: 'Discovery',
    shortDesc: 'Deep audit of business objectives, user personas, and competitor landscape.',
    description: 'We initiate every client partnership by dissecting your commercial objectives, customer psychology, operational bottlenecks, and physical facility parameters. No guesswork — only actionable intelligence.',
    icon: 'Search',
    deliverables: [
      'Comprehensive Stakeholder Discovery Briefing',
      'Market & Competitor White-Space Analysis',
      'Target Audience & Customer Persona Mapping',
      'Scope of Work & Technical Feasibility Architecture'
    ]
  },
  {
    step: '02',
    number: '02',
    title: 'Strategy',
    shortDesc: 'Architecting the master commercial, technical, and creative blueprint.',
    description: 'We formulate the comprehensive execution roadmap uniting software architecture, media budget allocations, brand positioning, and security camera placement for maximum impact.',
    icon: 'Compass',
    deliverables: [
      'Omnichannel Strategy & Media Plan Blueprint',
      'System Architecture & Database Entity Schemas',
      'Brand Identity Concept Moodboards & Tone of Voice',
      'Milestone Timeline & Agile Sprints Schedule'
    ]
  },
  {
    step: '03',
    number: '03',
    title: 'Design',
    shortDesc: 'Crafting pixel-perfect UI/UX, brand identity systems, and ad creatives.',
    description: 'Our design studio translates strategy into tactile visuals: golden-ratio logos, interactive Figma design prototypes, packaging die-lines, and thumb-stopping commercial ad creatives.',
    icon: 'Palette',
    deliverables: [
      'Interactive Figma UI/UX Prototypes (Web & Mobile)',
      'Vector Logo Marks, Color Tokens & Typography Manual',
      'Commercial Storyboards & Ad Creative Variations',
      'Print & Packaging Production Specifications'
    ]
  },
  {
    step: '04',
    number: '04',
    title: 'Development / Production',
    shortDesc: 'Writing clean scalable code, shooting 4K cinema media, and installing CCTV.',
    description: 'Our specialized cross-functional engineering, production, and hardware teams execute in tight synchronization: clean code development, cinema camera shoots, and physical security rigging.',
    icon: 'Code2',
    deliverables: [
      'Clean Modular Codebase (Next.js, Flutter, APIs)',
      '4K Commercial Videos & Studio Product Catalog',
      'Physical CCTV Conduit, Cabling & NVR Rack Setup',
      'End-to-End Automated Integration Testing'
    ]
  },
  {
    step: '05',
    number: '05',
    title: 'Launch',
    shortDesc: 'Flawless production go-live, ad campaigns activation, and security boot.',
    description: 'We execute structured go-live operations with zero downtime. Software microservices go live on cloud clusters, ad funnels activate with algorithmic budget pacing, and security grids begin 24/7 recording.',
    icon: 'Rocket',
    deliverables: [
      'Cloud Production Cluster Deployment (GCP / Docker)',
      'Omnichannel Ad Campaigns Live Deployment',
      'Facility Security Center Verification & Biometrics Boot',
      '24/7 Go-Live Telemetry Monitoring'
    ]
  },
  {
    step: '06',
    number: '06',
    title: 'Support & Optimization',
    shortDesc: 'Continuous telemetry analysis, algorithmic A/B testing, and SLA maintenance.',
    description: 'Launch is just day one. We continuously analyze user interaction telemetry, run multivariate split tests on ad hooks, apply software security patches, and monitor surveillance system health.',
    icon: 'BarChart3',
    deliverables: [
      'Bi-Weekly Executive Performance & ROAS Reports',
      'Conversion Rate Optimization (CRO) Iterations',
      'Ongoing Security Firmware & Code Maintenance SLAs',
      'Dedicated Growth Partner & Technical Support Line'
    ]
  }
];
