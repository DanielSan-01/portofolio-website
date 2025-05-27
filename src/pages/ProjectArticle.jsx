import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft, ExternalLink, Github, Share2, Copy } from 'lucide-react'
import { useState } from 'react'
import './ProjectArticle.css'

const ProjectArticle = () => {
  const { projectId } = useParams()
  const [copySuccess, setCopySuccess] = useState(false)
  
  const project = projects.find(p => p.id === projectId)
  
  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <article className="project-article">
      <div className="container">
        {/* Back Navigation */}
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>

        {/* Article Header */}
        <header className="article-header">
          <h1 className="article-title">{project.title}</h1>
          <p className="article-description">{project.description}</p>
          
          <div className="article-actions">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-button primary"
            >
              <ExternalLink size={20} />
              View Live Site
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-button secondary"
            >
              <Github size={20} />
              View Repository
            </a>
            <button 
              onClick={handleCopyLink}
              className="action-button secondary"
            >
              {copySuccess ? <Share2 size={20} /> : <Copy size={20} />}
              {copySuccess ? 'Copied!' : 'Share'}
            </button>
          </div>
        </header>

        {/* Project Image */}
        <div className="article-image">
          <img 
            src={project.image} 
            alt={project.title}
            onError={(e) => {
              // Create a more specific placeholder based on project type
              const placeholderText = project.id === 'holidaze' ? 'Holidaze+Dashboard' :
                                    project.id === 'agency2-fork' ? 'The+Spot+Events' :
                                    project.id === 'community-science-museum' ? 'Colorful+Museum' : 'Project+Image'
              e.target.src = `https://via.placeholder.com/800x400/667eea/ffffff?text=${placeholderText}`
            }}
          />
          <p className="image-caption">{project.imageCaption}</p>
        </div>

        {/* Technologies */}
        <div className="technologies-section">
          <h2>Technologies Used</h2>
          <div className="technologies-grid">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        {/* Main Content - Reflections */}
        <div className="article-content">
          <div 
            className="reflections-content"
            dangerouslySetInnerHTML={{ __html: project.reflections }}
          />
        </div>

        {/* Project Links */}
        <div className="project-links">
          <h2>Project Resources</h2>
          <div className="links-grid">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              <ExternalLink size={24} />
              <div>
                <h3>Live Website</h3>
                <p>View the deployed application</p>
              </div>
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              <Github size={24} />
              <div>
                <h3>GitHub Repository</h3>
                <p>Explore the source code and README</p>
              </div>
            </a>
          </div>
        </div>

        {/* Navigation to other projects */}
        <div className="other-projects">
          <h2>Other Projects</h2>
          <div className="other-projects-grid">
            {projects
              .filter(p => p.id !== projectId)
              .map(otherProject => (
                <Link 
                  key={otherProject.id}
                  to={`/project/${otherProject.id}`}
                  className="other-project-card"
                >
                  <img 
                    src={otherProject.thumbnail} 
                    alt={otherProject.title}
                    onError={(e) => {
                      const placeholderText = otherProject.id === 'holidaze' ? 'Holidaze' :
                                             otherProject.id === 'agency2-fork' ? 'The+Spot' :
                                             otherProject.id === 'community-science-museum' ? 'Museum' : 'Project'
                      e.target.src = `https://via.placeholder.com/300x200/667eea/ffffff?text=${placeholderText}`
                    }}
                  />
                  <div className="other-project-info">
                    <h3>{otherProject.title}</h3>
                    <p>{otherProject.shortDescription}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectArticle 