import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { Code, Palette, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { staggerScrollReveal } from '../utils/gsapAnimations'
import './Home.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  // Refs for hero section elements (GSAP needs DOM references)
  const heroTitleRef = useRef(null)
  const heroDescriptionRef = useRef(null)
  const heroFeaturesRef = useRef(null)
  const projectsGridRef = useRef(null)
  const languagesGridRef = useRef(null)
  const aboutSectionRef = useRef(null)

  useEffect(() => {
    // Wait for next tick to ensure DOM is ready
    const ctx = gsap.context(() => {
      // Hero section timeline - animates title, description, then features sequentially
      if (heroTitleRef.current && heroDescriptionRef.current && heroFeaturesRef.current) {
        const heroTimeline = gsap.timeline()

        // Animate title first (fade in + slide up)
        heroTimeline.from(heroTitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out"
        })
        // Animate description (starts 0.3s before title animation ends - overlap)
        .from(heroDescriptionRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.4")  // "-=0.4" means start 0.4s before previous animation ends
        // Animate features with stagger (each feature animates with a delay)
        .from(heroFeaturesRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.2,  // 0.2s delay between each feature
          ease: "power2.out"
        }, "-=0.3")
      }

      // Animate project cards - always animate, whether scrolling or already visible
      if (projectsGridRef.current) {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          const cards = gsap.utils.toArray(".project-card")
          
          if (cards.length === 0) return // Safety check
          
          // Ensure initial state is set (CSS might not be applied yet)
          gsap.set(cards, { opacity: 0, y: 50 })
          
          // Check if section is already in viewport
          const rect = projectsGridRef.current.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight * 0.9
          
          if (isVisible) {
            // Already visible - animate after hero animation completes
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              delay: 1.2  // Wait for hero animation to finish
            })
          } else {
            // Not visible - use scroll trigger
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: projectsGridRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            })
          }
        })
      }

      // Animate about section on scroll
      if (aboutSectionRef.current) {
        gsap.from(aboutSectionRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        })
      }

      // Animate language grid items on scroll with stagger
      if (languagesGridRef.current) {
        gsap.from(".language-item", {
          opacity: 0,
          scale: 0.8,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",  // Bouncy easing effect
          scrollTrigger: {
            trigger: languagesGridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        })
      }

      // Refresh ScrollTrigger after a short delay to ensure all elements are registered
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    })

    // Cleanup function - kills animations when component unmounts
    return () => {
      ctx.revert() // This kills all animations created in the context
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="home">
      {/* Hero Section - Terminal Style */}
      <section className="hero terminal-hero">
        <div className="container-custom">
          <div className="hero-content terminal-content">
            <div className="terminal-prompt">
              <span className="prompt-user">danielsan@portfolio</span>
              <span className="prompt-separator">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
            </div>
            <h1 ref={heroTitleRef} className="hero-title terminal-title">
              Hello there, my name is Danielsan
            </h1>
            <div className="terminal-prompt">
              <span className="prompt-user">danielsan@portfolio</span>
              <span className="prompt-separator">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
              <span className="prompt-command"> cat about.txt</span>
            </div>
            <p ref={heroDescriptionRef} className="hero-description terminal-output">
              me gusta programming
            </p>
            <div className="terminal-prompt">
              <span className="prompt-user">danielsan@portfolio</span>
              <span className="prompt-separator">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
              <span className="prompt-command"> ls skills/</span>
            </div>
            <div ref={heroFeaturesRef} className="hero-features terminal-list">
              <div className="feature terminal-item">
                <span className="terminal-bullet">▶</span>
                <span>Clean Code</span>
              </div>
              <div className="feature terminal-item">
                <span className="terminal-bullet">▶</span>
                <span>Modern Design</span>
              </div>
              <div className="feature terminal-item">
                <span className="terminal-bullet">▶</span>
                <span>Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Terminal Style */}
      <section className="projects-section terminal-section">
        <div className="container-custom">
          <div className="terminal-prompt">
            <span className="prompt-user">danielsan@portfolio</span>
            <span className="prompt-separator">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span className="prompt-command"> ls projects/</span>
          </div>
          <div className="section-header terminal-header">
            <h2 className="section-title terminal-section-title">Projects</h2>
          </div>
          
          <div ref={projectsGridRef} className="projects-grid terminal-grid">
            {projects.slice(0, 1).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="terminal-prompt" style={{ marginTop: '3rem' }}>
            <span className="prompt-user">danielsan@portfolio</span>
            <span className="prompt-separator">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span className="prompt-command"> ls earlier-projects/</span>
          </div>
          <h3 className="terminal-section-title" style={{ marginTop: '1rem', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
            Earlier Projects
          </h3>
          <div className="projects-grid terminal-grid">
            {projects.slice(1, 4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Terminal Style */}
      <section ref={aboutSectionRef} className="about-section terminal-section">
        <div className="container-custom">
          <div className="terminal-prompt">
            <span className="prompt-user">danielsan@portfolio</span>
            <span className="prompt-separator">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span className="prompt-command"> cat README.md</span>
          </div>
          <div className="about-content terminal-content">
            <h2 className="about-title terminal-section-title">Earlier Projects</h2>
            <div className="about-text terminal-output">
              <p>During my studies, I built these projects to develop my frontend fundamentals:</p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages and Tools Section */}
      <section className="languages-section">
        <div className="container-custom">
          <div className="terminal-prompt">
            <span className="prompt-user">danielsan@portfolio</span>
            <span className="prompt-separator">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span className="prompt-command"> which tools</span>
          </div>
          <div className="section-header terminal-header">
            <h2 className="section-title terminal-section-title">Languages and Tools</h2>
          </div>
          
          <div ref={languagesGridRef} className="languages-grid terminal-grid">
            <div className="language-item terminal-item">
              <span className="terminal-bullet">▶</span>
              <span className="language-name">Visual Studio Code</span>
            </div>
            
            <div className="language-item terminal-item">
              <span className="terminal-bullet">▶</span>
              <span className="language-name">HTML5</span>
            </div>
            
            <div className="language-item terminal-item">
              <span className="terminal-bullet">▶</span>
              <span className="language-name">CSS3</span>
            </div>
            
            <div className="language-item terminal-item">
              <span className="terminal-bullet">▶</span>
              <span className="language-name">JavaScript</span>
            </div>
            
            <div className="language-item terminal-item">
              <span className="terminal-bullet">▶</span>
              <span className="language-name">TypeScript</span>
            </div>
            
            <div className="language-item terminal-item">
              <span className="terminal-bullet">▶</span>
              <span className="language-name">Node.js</span>
            </div>
            
            <div className="language-item terminal-item">
              <span className="terminal-bullet">▶</span>
              <span className="language-name">.NET</span>
            </div>
            
            <div className="language-item terminal-item">
              <span className="terminal-bullet">▶</span>
              <span className="language-name">PostgreSQL</span>
            </div>
            
            <div className="language-item terminal-item">
              <span className="terminal-bullet">▶</span>
              <span className="language-name">React</span>
            </div>
          </div>
        </div>
      </section>

      {/* How to reach me Section */}
      <section className="contact-section terminal-section">
        <div className="container-custom">
          <div className="terminal-prompt">
            <span className="prompt-user">danielsan@portfolio</span>
            <span className="prompt-separator">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span className="prompt-command"> cat contact.txt</span>
          </div>
          <h2 className="terminal-section-title">How to reach me</h2>
          <div className="terminal-list" style={{ marginTop: '1rem' }}>
            <div className="terminal-item">
              <span className="terminal-bullet">▶</span>
              <a href="/portofolio-website" className="terminal-link">Portfolio</a>
            </div>
            <div className="terminal-item">
              <span className="terminal-bullet">▶</span>
              <a 
                href="https://www.linkedin.com/in/daniel-%C3%B8stensen-84483ab0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="terminal-link"
              >
                LinkedIn
              </a>
            </div>
            <div className="terminal-item">
              <span className="terminal-bullet">▶</span>
              <a 
                href="https://github.com/DanielSan-01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="terminal-link"
              >
                My repos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 