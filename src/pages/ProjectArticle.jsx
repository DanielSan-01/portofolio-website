import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import SEO from '../components/SEO'
import LazyImage from '../components/LazyImage'
import './ProjectArticle.css'

const ProjectArticle = () => {
  const { projectId } = useParams()
  
  const project = projects.find(p => p.id === projectId)
  
  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container-custom">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="project-article">
      <SEO 
        title={`${project.title} - DanielSan Portfolio`}
        description={project.description}
        keywords={`${project.technologies.join(', ')}, project, portfolio, danielsan`}
      />
      <div className="container-custom">
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
              className="btn-primary"
            >
              <ExternalLink size={20} />
              View Live Site
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={20} />
              View Repository
            </a>
          </div>
        </header>

        {/* Project Image */}
        <div className="article-image">
          <div className="image-container">
            <LazyImage 
              src={project.image} 
              alt={project.title}
              className="project-image"
            />
          </div>
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