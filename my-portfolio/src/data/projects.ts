export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Brand Growth Campaign',
    role: 'Digital Marketer / Strategist',
    description: 'Full-funnel paid campaign that scaled a DTC brand from zero to 50k monthly visitors. Managed Google Ads, Meta Ads, and email automation end-to-end — 4.2x ROAS at peak.',
    tags: ['Google Ads', 'Meta Ads', 'Email Automation', 'SEO'],
    year: '2024',
  },
  {
    id: '2',
    title: 'E-Commerce Web Platform',
    role: 'Frontend Developer',
    description: 'Custom storefront built with Next.js and Stripe. Real-time inventory, dynamic pricing engine, and a conversion-optimized checkout flow that cut cart abandonment by 30%.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    year: '2024',
  },
  {
    id: '3',
    title: 'Social Media Rebrand',
    role: 'Brand Strategist / Content Lead',
    description: 'End-to-end content strategy and visual rebrand for a lifestyle brand across Instagram, TikTok, and LinkedIn. 3x engagement in 90 days, +18k net new followers.',
    tags: ['Content Strategy', 'Branding', 'Social Media', 'Creative Direction'],
    year: '2023',
  },
  {
    id: '4',
    title: 'SaaS Analytics Dashboard',
    role: 'Full-Stack Developer',
    description: 'Real-time analytics dashboard for a B2B SaaS product. User role management, live data visualization, and exportable PDF reports. Built solo from design to deployment.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    year: '2023',
  },
];
