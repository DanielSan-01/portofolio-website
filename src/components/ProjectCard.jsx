import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          onError={(e) => {
            // Create a more specific placeholder based on project type
            const placeholderText = project.id === 'holidaze' ? 'Holidaze+Dashboard' :
                                  project.id === 'agency2-fork' ? 'The+Spot+Events' :
                                  project.id === 'community-science-museum' ? 'Colorful+Museum' : 'Project+Image'
            e.target.src = `https://via.placeholder.com/400x250/667eea/ffffff?text=${placeholderText}`
          }}
        />
        <div className="project-overlay">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="live-link"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
            <span>View Live</span>
          </a>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        
        <div className="project-technologies">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-tag">+{project.technologies.length - 3}</span>
          )}
        </div>
        
        <Link to={`/project/${project.id}`} className="read-more">
          <span>Read More</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard 