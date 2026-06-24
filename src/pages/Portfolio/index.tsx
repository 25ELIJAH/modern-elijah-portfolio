import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} title={p.title} description={p.description} image={p.image} tags={p.tags} link={p.link} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
