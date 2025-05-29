import React from 'react'
import { Link } from 'react-router-dom'
import { FolderOpen, Github, Linkedin, Mail } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container-custom">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">DanielSan</span>
          </Link>
          
          <nav className="nav">
            <Link to="/projects" className="nav-link">
              <FolderOpen size={20} />
              <span className="nav-text">Projects</span>
            </Link>
            
            <a 
              href="https://github.com/DanielSan-01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              <Github size={20} />
              <span className="nav-text">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/daniel-%C3%B8stensen-84483ab0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              <Linkedin size={20} />
              <span className="nav-text">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:danoes00993@stud.noroff.no"
              className="nav-link"
            >
              <Mail size={20} />
              <span className="nav-text">Contact</span>
            </a>

            <DarkModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 