import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import LazyImage from './LazyImage'
import gsap from 'gsap'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const titleRef = useRef(null)

  // GSAP hover animations - terminal style
  const handleMouseEnter = () => {
    const card = cardRef.current
    const title = titleRef.current

    if (card && title) {
      gsap.to(title, {
        color: "var(--terminal-text-bright)",
        textShadow: "0 0 10px var(--terminal-text-bright)",
        duration: 0.2,
        ease: "power2.out"
      })
    }
  }

  const handleMouseLeave = () => {
    const title = titleRef.current

    if (title) {
      gsap.to(title, {
        color: "var(--terminal-text)",
        textShadow: "none",
        duration: 0.2,
        ease: "power2.out"
      })
    }
  }

  return (
    <Link 
      to={`/project/${project.id}`} 
      className="card project-card terminal-project-item"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="terminal-project-content">
        <div className="terminal-file-info">
          <span className="terminal-file-type">📁</span>
          <h3 ref={titleRef} className="project-title terminal-project-title">
            {project.title}
          </h3>
          <span className="terminal-arrow">→</span>
        </div>
        <p className="project-description terminal-project-description">
          {project.shortDescription}
        </p>
        <div className="project-technologies terminal-tech-list">
          <span className="terminal-tech-label">Tech:</span>
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="tech-badge terminal-tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-more terminal-tech-more">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard 