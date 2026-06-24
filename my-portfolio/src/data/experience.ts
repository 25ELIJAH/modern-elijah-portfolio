export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export const experience: Experience[] = [
  {
    role: 'Freelance Digital Marketer & Developer',
    company: 'Self-Employed',
    period: '2022 — Present',
    description: 'Building and scaling digital presence for brands across industries. Managing paid ad campaigns, building custom web solutions, and delivering measurable ROI for clients globally.',
    tags: ['Digital Marketing', 'Web Development', 'Strategy', 'Client Management'],
  },
  {
    role: 'Social Media Manager',
    company: 'Client Portfolio',
    period: '2021 — 2022',
    description: 'Managed organic and paid social for multiple brands simultaneously. Created content calendars, ran A/B tests on ad creatives, and grew combined audience by 80k followers across platforms.',
    tags: ['Social Media', 'Content Strategy', 'Paid Ads', 'Analytics'],
  },
  {
    role: 'Web Developer',
    company: 'Freelance Projects',
    period: '2020 — 2021',
    description: 'Built responsive websites and high-converting landing pages for small businesses and startups. Focused on performance, accessibility, and conversion-optimized design patterns.',
    tags: ['React', 'HTML/CSS', 'JavaScript', 'UI/UX'],
  },
];
