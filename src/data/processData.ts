import { ProcessStep } from '../core/types/common';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    number: '01',
    title: 'Discover',
    shortDesc: 'Deep audit of your business goals, target audience, and competitive landscape.',
    description: 'We initiate every partnership by dissecting your commercial objectives, brand positioning, customer psychology, and technical requirements. No guesswork — only actionable intelligence.',
    icon: 'Search',
    deliverables: [
      'Comprehensive Stakeholder Discovery Session',
      'Competitor Benchmark & Gap Analysis',
      'Target Audience & Customer Persona Mapping',
      'Technical Scope & Feasibility Document'
    ]
  },
  {
    step: '02',
    number: '02',
    title: 'Strategy',
    shortDesc: 'Architecting the master blueprint, technical direction, and creative strategy.',
    description: 'We translate raw insights into a bulletproof operational roadmap. From database schemas and marketing funnels to visual moodboards, every milestone is designed for maximum leverage.',
    icon: 'Compass',
    deliverables: [
      'Omnichannel Strategy Blueprint',
      'UI/UX Wireframes & System Architecture Diagrams',
      'Content Pillars & Campaign Media Plan',
      'Milestone Timeline & Agile Sprints'
    ]
  },
  {
    step: '03',
    number: '03',
    title: 'Create',
    shortDesc: 'Engineering the software, designing brand assets, and producing media.',
    description: 'Our specialized cross-functional teams build the solution in synchronization. Designers craft pixel-perfect interfaces, engineers write clean scalable code, and cinematographers shoot world-class footage.',
    icon: 'Layers',
    deliverables: [
      'Production-Grade Code (Web, Flutter, APIs)',
      'Brand Guidelines, Vector Assets & 3D Renderings',
      'Cinematic Commercial Videos & Studio Photos',
      'Hardware Surveillance & Network Installations'
    ]
  },
  {
    step: '04',
    number: '04',
    title: 'Launch',
    shortDesc: 'Flawless production deployment and omnichannel marketing activation.',
    description: 'We orchestrate seamless go-live executions with zero downtime. Production code is pushed, ad campaigns go live with automated bid tracking, and surveillance grids are activated with 24/7 telemetry.',
    icon: 'Rocket',
    deliverables: [
      'Production Server Deployment (GCP / Firebase)',
      'Cross-Platform Ad Campaigns Live Launch',
      'Team Training & Knowledge Transfer',
      '24/7 Launch Monitoring & Quality Assurance'
    ]
  },
  {
    step: '05',
    number: '05',
    title: 'Optimize',
    shortDesc: 'Continuous telemetry analysis, algorithmic A/B testing, and growth scaling.',
    description: 'Launch is just day one. We analyze real-world telemetry, conduct multivariate tests on ad creatives, optimize server response times, and scale winning campaigns to maximize lifetime ROI.',
    icon: 'BarChart3',
    deliverables: [
      'Bi-Weekly Executive Analytics Dashboards',
      'Conversion Rate Optimization (CRO) Iterations',
      'Ongoing System Updates & Security Audits',
      'Dedicated Account Growth Strategist'
    ]
  }
];
