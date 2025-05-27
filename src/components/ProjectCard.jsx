import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="card project-card">
      <div className="project-image">
        <img 
          src={project.thumbnail} 
          alt={project.title}
        />
      </div>
      
      <div className="project-content">
        <h3 className="project-title">
          {project.title}
        </h3>
        <p className="project-description">
          {project.shortDescription}
        </p>
        
        <div className="project-technologies">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-more">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
      </div>
    </Link>
  )
}

export default ProjectCard 