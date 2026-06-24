const ITEMS = [
  'Software Development', 'Digital Marketing', 'React & Next.js', 'Google Ads',
  'SEO Optimization', 'Brand Strategy', 'Content Creation', 'UI/UX Design',
  'Python', 'TypeScript', 'Meta Ads', 'Analytics & Reporting',
];

const TrustBar = () => {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker-wrap" style={{ background: 'var(--bg2)' }}>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
