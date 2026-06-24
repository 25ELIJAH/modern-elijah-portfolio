interface ToolIconProps {
  id: string;
  label: string;
}

const iconColors: Record<string, string> = {
  html: '#e34f26',
  css: '#1572b6',
  js: '#f7df1e',
  ts: '#3178c6',
  react: '#61dafb',
  next: '#111827',
  node: '#339933',
  python: '#3776ab',
  git: '#f05032',
  github: '#111827',
  mysql: '#00758f',
  postgres: '#336791',
  tailwind: '#06b6d4',
  bootstrap: '#7952b3',
  vscode: '#007acc',
  figma: '#f24e1e',
  vercel: '#111827',
  netlify: '#00c7b7',
  'google-ads': '#4285f4',
  meta: '#0866ff',
  analytics: '#f9ab00',
  'tag-manager': '#246fdb',
  'search-console': '#34a853',
  canva: '#00c4cc',
  photoshop: '#31a8ff',
  tiktok: '#111827',
  linkedin: '#0a66c2',
  mailchimp: '#ffe01b',
  seo: '#ff6b00',
};

const ToolIcon = ({ id, label }: ToolIconProps) => {
  const color = iconColors[id] ?? '#ff6b00';
  const shortLabel = label
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();

  return (
    <svg className="tool-icon" viewBox="0 0 64 64" aria-label={`${label} logo`} role="img">
      <rect width="64" height="64" rx="16" fill={color} />
      <circle cx="48" cy="16" r="10" fill="rgba(255,255,255,.22)" />
      <path d="M14 44 L24 18 H40 L50 44 H39 L36 36 H28 L25 44 Z" fill="rgba(255,255,255,.22)" />
      <text x="32" y="38" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="900">
        {shortLabel}
      </text>
    </svg>
  );
};

export default ToolIcon;
