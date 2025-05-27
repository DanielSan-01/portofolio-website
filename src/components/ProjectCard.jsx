import { Link } from 'react-router-dom'
import { ExternalLink, Github } from 'lucide-react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div className="card project-card">
      <div className="project-image">
        <img 
          src={project.thumbnail} 
          alt={project.title}
        />
        <div className="project-overlay">
          <div className="project-links">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink size={14} />
              Live
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <Github size={14} />
              Code
            </a>
          </div>
        </div>
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
        
        <Link 
          to={`/project/${project.id}`}
          className="read-more"
        >
          Read More
          <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard 