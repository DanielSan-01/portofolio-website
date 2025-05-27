import { Link } from 'react-router-dom'
import { Home, User, Github, Linkedin } from 'lucide-react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-text">Portfolio</span>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">
            <Home size={20} />
            <span>Home</span>
          </Link>
          <a 
            href="https://github.com/DanielSan-01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/daniel-østensen-84483ab0/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header 