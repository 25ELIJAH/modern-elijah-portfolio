export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  category: 'marketing' | 'development';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Short description of the project.',
    image: '/images/portfolio/project1.jpg',
    tags: ['React', 'TypeScript'],
    link: 'https://example.com',
    category: 'development',
  },
];
