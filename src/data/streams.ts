import { StreamSource, ProjectShowcase, ServiceItem, ProcessStep } from '../types/video';

export const STREAM_PRESETS: StreamSource[] = [
  {
    id: 'stream-hero',
    title: 'Cinematic Nexus — Web Agency Master',
    location: 'USA · Canada · Global Delivery',
    duration: '00:03',
    hlsUrl: '',
    fallbackMp4: '/videos/hero-background.mp4',
    resolution: '1920 × 1080',
    aspectRatio: '16:9 Cinematic',
    fps: 60,
    description:
      'Cinematic high-performance digital background capturing modern digital growth, fluid kinetics, and radiant visual design.',
    palette: ['#030206', '#f59e0b', '#fde047'],
  },
  {
    id: 'stream-tech',
    title: 'High-Performance Architecture',
    location: 'San Francisco · New York',
    duration: '12:14',
    hlsUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    fallbackMp4:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    resolution: '3840 × 2160',
    aspectRatio: '2.39:1 Anamorphic',
    fps: 60,
    description:
      'Precision engineered codebases with sub-second page loads, accessible component trees, and resilient cloud architectures.',
    palette: ['#0f172a', '#38bdf8', '#818cf8'],
  },
  {
    id: 'stream-brand',
    title: 'Atmospheric Brand Storytelling',
    location: 'Vancouver · Toronto',
    duration: '15:20',
    hlsUrl:
      'https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    fallbackMp4:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    resolution: '1920 × 1080',
    aspectRatio: '16:9 Cinematic',
    fps: 60,
    description:
      'Elevated luxury and hospitality digital identities with dynamic typography, cinematic video backdrops, and seamless bookings.',
    palette: ['#09090b', '#f59e0b', '#64748b'],
  },
];

/* =========================================================
   MENTOREX DIGITAL WEBSITE PLANS
   ========================================================= */

export const MENTOREX_SERVICES: ServiceItem[] = [
  // =======================================================
  // 🇺🇸 USA — STARTER
  // =======================================================
  {
    id: 'srv-01',
    number: '🇺🇸 USA · 01',
    title: 'Starter — $299 USD',
    description:
      'Everything your business needs to establish a professional online presence.',
    features: [
      '1–3 Pages',
      'Custom Website Design',
      'Mobile Responsive',
      'Contact Form',
      'Google Maps',
      'Social Media Integration',
      'Basic SEO',
      'Speed Optimization',
      '2 Revisions',
      '7 Days Support',
      '5–7 Day Delivery',
    ],
    highlight: '🇺🇸 USA · STARTER',
  },

  // =======================================================
  // 🇺🇸 USA — BUSINESS
  // =======================================================
  {
    id: 'srv-02',
    number: '🇺🇸 USA · 02',
    title: 'Business — $599 USD',
    description:
      'Turn your website into a powerful lead-generation tool designed to attract and convert customers.',
    features: [
      'Up to 6 Pages',
      'Custom UI/UX Design',
      'Mobile Responsive',
      'Contact Form',
      'Google Maps',
      'Social Media Integration',
      'Advanced SEO',
      'Speed Optimization',
      'Blog',
      'Booking System',
      'WhatsApp / Live Chat',
      'Google Analytics',
      'Google Search Console',
      'Basic Copywriting',
      '3 Revisions',
      '30 Days Support',
      '7–10 Day Delivery',
    ],
    highlight: '🇺🇸 USA · MOST POPULAR',
  },

  // =======================================================
  // 🇺🇸 USA — PREMIUM
  // =======================================================
  {
    id: 'srv-03',
    number: '🇺🇸 USA · 03',
    title: 'Premium — $999 USD',
    description:
      'A complete premium digital experience built for businesses ready for advanced growth.',
    features: [
      'Up to 10 Pages',
      'Premium Custom UI/UX',
      'Advanced Responsive Design',
      'Contact Form',
      'Google Maps',
      'Social Media Integration',
      'Advanced SEO',
      'Advanced Speed Optimization',
      'Blog',
      'Booking System',
      'WhatsApp / Live Chat',
      'Google Analytics',
      'Google Search Console',
      'Professional Copywriting',
      'Advanced Animations',
      'Custom Integrations',
      '5 Revisions',
      '60 Days Support',
      '10–14 Day Delivery',
    ],
    highlight: '🇺🇸 USA · PREMIUM',
  },

  // =======================================================
  // 🇨🇦 CANADA — STARTER
  // =======================================================
  {
    id: 'srv-04',
    number: '🇨🇦 Canada · 01',
    title: 'Starter — $399 CAD',
    description:
      'Everything your Canadian business needs to establish a professional online presence.',
    features: [
      '1–3 Pages',
      'Custom Website Design',
      'Mobile Responsive',
      'Contact Form',
      'Google Maps',
      'Social Media Integration',
      'Basic SEO',
      'Speed Optimization',
      '2 Revisions',
      '7 Days Support',
      '5–7 Day Delivery',
    ],
    highlight: '🇨🇦 CANADA · STARTER',
  },

  // =======================================================
  // 🇨🇦 CANADA — BUSINESS
  // =======================================================
  {
    id: 'srv-05',
    number: '🇨🇦 Canada · 02',
    title: 'Business — $799 CAD',
    description:
      'Turn your website into a powerful lead-generation tool designed to attract and convert customers.',
    features: [
      'Up to 6 Pages',
      'Custom UI/UX Design',
      'Mobile Responsive',
      'Contact Form',
      'Google Maps',
      'Social Media Integration',
      'Advanced SEO',
      'Speed Optimization',
      'Blog',
      'Booking System',
      'WhatsApp / Live Chat',
      'Google Analytics',
      'Google Search Console',
      'Basic Copywriting',
      '3 Revisions',
      '30 Days Support',
      '7–10 Day Delivery',
    ],
    highlight: '🇨🇦 CANADA · MOST POPULAR',
  },

  // =======================================================
  // 🇨🇦 CANADA — PREMIUM
  // =======================================================
  {
    id: 'srv-06',
    number: '🇨🇦 Canada · 03',
    title: 'Premium — $1,299 CAD',
    description:
      'A complete premium digital experience with advanced functionality for growing businesses.',
    features: [
      'Up to 10 Pages',
      'Premium Custom UI/UX',
      'Advanced Responsive Design',
      'Contact Form',
      'Google Maps',
      'Social Media Integration',
      'Advanced SEO',
      'Advanced Speed Optimization',
      'Blog',
      'Booking System',
      'WhatsApp / Live Chat',
      'Google Analytics',
      'Google Search Console',
      'Professional Copywriting',
      'Advanced Animations',
      'Custom Integrations',
      '5 Revisions',
      '60 Days Support',
      '10–14 Day Delivery',
    ],
    highlight: '🇨🇦 CANADA · PREMIUM',
  },
];

/* =========================================================
   PORTFOLIO / OUR WORK
   ========================================================= */

export const ARCHIVE_PROJECTS: ProjectShowcase[] = [
  {
    id: 'proj-01',
    title: 'Lumina Osteria & Wine Bar',
    client: 'Lumina Hospitality Group',
    category: 'Restaurants',
    year: '2026',
    location: 'Manhattan, New York · USA',
    medium: 'Custom Next.js & OpenTable Integration',
    scale: 'Multi-location luxury dining experience',
    outcome: '+142% online table reservations in 60 days',
    summary:
      'A dark, sensual digital presence celebrating artisan Italian gastronomy, featuring live sommelier wine lists and fluid booking animations.',
    accentColor: '#f59e0b',
    deliverables: [
      'Custom Web Design',
      'Interactive Digital Menu',
      'Reservation Engine',
      'Local NYC SEO',
    ],
    metrics: '+142% Reservations · 0.6s Load Time',
  },

  {
    id: 'proj-02',
    title: 'The Aspen Ridge Boutique Resort',
    client: 'Ridge Luxury Stays',
    category: 'Hotels',
    year: '2025',
    location: 'Aspen, Colorado · USA',
    medium: 'Bespoke Booking Flow & 4K Alpine Media',
    scale: '48-suite mountain sanctuary & wellness spa',
    outcome:
      '98% direct bookings, cutting third-party OTA fees by 40%',
    summary:
      'A cinematic alpine retreat showcase with sweeping ambient winter video, interactive suite previews, and friction-free direct reservations.',
    accentColor: '#38bdf8',
    deliverables: [
      'Cinematic Brand Website',
      'Direct Booking Engine',
      'Virtual Suite Tours',
      'Speed Optimization',
    ],
    metrics: '98% Direct Bookings · 4.9/5 Guest UX',
  },

  {
    id: 'proj-03',
    title: 'Apex Living Coastal Properties',
    client: 'Apex Capital Realty',
    category: 'Real Estate',
    year: '2026',
    location: 'Miami & Vancouver · USA & Canada',
    medium: 'Ultra-High-Res Interactive Property Showcase',
    scale: '$240M+ active luxury residential portfolio',
    outcome:
      '$38M in closed acquisitions originated via online portal',
    summary:
      'An elite real estate portal with spatial property filtering, floor plan interactive overlays, and private VIP inquiry routing.',
    accentColor: '#818cf8',
    deliverables: [
      'MLS IDX Integration',
      'Neighborhood Guides',
      'Private Client Vault',
      'High-Net-Worth Lead Funnels',
    ],
    metrics: '$38M Deal Volume · 100% Mobile Responsive',
  },

  {
    id: 'proj-04',
    title: 'Kanso Minimalist Apparel',
    client: 'Kanso Goods Co.',
    category: 'E-Commerce',
    year: '2025',
    location: 'Seattle, Washington · USA',
    medium: 'Headless Shopify with Instant Micro-Cart',
    scale: 'Global direct-to-consumer sustainable brand',
    outcome:
      '3.8% checkout conversion rate (industry avg 1.8%)',
    summary:
      'Streamlined Scandinavian-Japanese minimalist e-commerce storefront with instant page transitions, fluid sizing charts, and zero clutter.',
    accentColor: '#10b981',
    deliverables: [
      'Headless Shopify Store',
      'Custom Product Customizer',
      'Apple Pay 1-Click',
      'Klaviyo Email Automation',
    ],
    metrics: '3.8% Conversion · +68% Repeat Customer Rate',
  },

  {
    id: 'proj-05',
    title: 'Vanguard Wealth & Advisory',
    client: 'Vanguard Partners LLC',
    category: 'Professional Services',
    year: '2026',
    location: 'Chicago, Illinois · USA',
    medium: 'Institutional Trust Portal & Client Deck Engine',
    scale: 'Asset management firm advising family offices',
    outcome: 'Awarded Best Corporate Financial Website 2026',
    summary:
      'A commanding corporate website projecting stability, regulatory excellence, and forward-looking financial insights.',
    accentColor: '#e2e8f0',
    deliverables: [
      'Corporate Web Architecture',
      'Client Portal Interface',
      'Compliance Ready',
      'B2B Authority SEO',
    ],
    metrics: 'Top 3 Organic Search Rankings · 99.99% Uptime',
  },

  {
    id: 'proj-06',
    title: 'PrismAI Intelligence Platform',
    client: 'Prism Labs Inc.',
    category: 'Startups',
    year: '2026',
    location: 'San Francisco, California · USA',
    medium: 'High-Conversion Interactive Product Landing',
    scale: 'Series-A backed enterprise workspace platform',
    outcome: '18,500 qualified waitlist signups in 3 weeks',
    summary:
      'Dark-mode, developer-centric marketing landing page featuring interactive canvas product demos, benchmark comparisons, and live API playground.',
    accentColor: '#ec4899',
    deliverables: [
      'Interactive Product Canvas',
      'Waitlist Management',
      'Docs & Pricing Engine',
      'Investor Relations Section',
    ],
    metrics: '18.5k Waitlist · Featured on Product Hunt #1',
  },
];

/* =========================================================
   PROCESS
   ========================================================= */

export const MENTOREX_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand your business, audience and goals.',
    details:
      'In-depth consultation to analyze your market positioning, competitor landscape, target customer personas, and primary conversion objectives.',
  },

  {
    number: '02',
    title: 'Design',
    description:
      'We create a visual direction tailored to your brand.',
    details:
      'Custom Figma designs with clean typography, bespoke color palettes, mobile and desktop layouts, and modern interactive prototypes.',
  },

  {
    number: '03',
    title: 'Develop',
    description:
      'We turn the design into a responsive, high-performance website.',
    details:
      'Clean, modern code built with scalable architectures, flawless mobile responsiveness, and sub-second load times across all devices.',
  },

  {
    number: '04',
    title: 'Optimize',
    description:
      'We optimize the website for speed, usability and SEO.',
    details:
      'Comprehensive Core Web Vitals optimization, search engine schema markup, cross-browser stress testing, and conversion tracking setup.',
  },

  {
    number: '05',
    title: 'Launch',
    description:
      'Your website goes live and starts working for your business.',
    details:
      'Seamless domain deployment, SSL certification, search console indexing, and training so you can attract clients and grow.',
  },
];

/* =========================================================
   TARGET CUSTOMERS
   ========================================================= */

export const TARGET_CUSTOMERS = [
  'Small businesses',
  'Startups',
  'Local businesses',
  'Restaurants',
  'Cafes',
  'Hotels',
  'Real estate businesses',
  'Professional services',
  'E-Commerce businesses',
  'Growing companies',
];

/* =========================================================
   WHY MENTOREX
   ========================================================= */

export const WHY_US_HIGHLIGHTS = [
  {
    title: 'Modern Design',
    desc:
      'Bespoke aesthetic crafted specifically for your industry to stand out from generic templates.',
    stat: '100% Custom',
  },

  {
    title: 'Responsive Experience',
    desc:
      'Pixel-perfect fluid layouts that look and perform impeccably on smartphones, tablets, and desktops.',
    stat: 'All Screen Sizes',
  },

  {
    title: 'Fast Performance',
    desc:
      'Engineered for sub-second speeds that keep visitors engaged and maximize search ranking.',
    stat: '< 1s Load Time',
  },

  {
    title: 'SEO Ready',
    desc:
      'Built with search engine best practices so your business is easily discoverable on Google.',
    stat: 'Google Optimized',
  },

  {
    title: 'Conversion Focused',
    desc:
      'Strategic user journeys, clear calls to action, and intuitive lead funnels that turn visitors into paying clients.',
    stat: 'Higher ROI',
  },

  {
    title: 'Ongoing Support',
    desc:
      'Proactive maintenance, security patches, and reliable technical support whenever you need it.',
    stat: '24/7 Reliability',
  },
];