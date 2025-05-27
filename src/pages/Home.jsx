import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { Code, Palette, Zap } from 'lucide-react'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Daniel Østensen
              <span className="highlight"> Portfolio</span>
            </h1>
            <p className="hero-description">
              Frontend Developer student at Noroff Fagskole, passionate about creating beautiful, 
              functional, and user-friendly web applications using modern technologies and best practices.
            </p>
            <div className="hero-features">
              <div className="feature">
                <Code size={24} />
                <span>Clean Code</span>
              </div>
              <div className="feature">
                <Palette size={24} />
                <span>Modern Design</span>
              </div>
              <div className="feature">
                <Zap size={24} />
                <span>Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              A showcase of my projects from Noroff Fagskole demonstrating skills in React development, 
              modern web technologies, and responsive design principles.
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="about-title">About This Portfolio</h2>
            <p className="about-text">
              This portfolio showcases three key projects from my Frontend Development studies at Noroff Fagskole: 
              Holidaze (venue booking platform), The Spot (event platform website), and Community Science Museum. Each project 
              demonstrates my growth as a developer and includes detailed reflections on the 
              learning process, challenges faced, and improvements made based on feedback.
            </p>
            <p className="about-text">
              Built with React and modern web technologies, this portfolio itself represents 
              my current skills in creating responsive, accessible, and performant web applications. 
              Currently studying in Bergen, Norway, I'm passionate about frontend development and continuously learning new technologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 