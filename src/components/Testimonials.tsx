
const testimonials = [
  { name: 'Client Name', role: 'CEO, Company', quote: 'Placeholder testimonial text.' },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      {testimonials.map((t, i) => (
        <blockquote key={i}>
          <p>{t.quote}</p>
          <cite>{t.name} — {t.role}</cite>
        </blockquote>
      ))}
    </section>
  );
};

export default Testimonials;
