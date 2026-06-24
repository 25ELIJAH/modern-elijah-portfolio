
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </div>
  );
};

export default ProjectCard;
