import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectArticle from './pages/ProjectArticle'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import SkipLink from './components/SkipLink'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <SkipLink />
          <Header />
          <main id="main-content">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:projectId" element={<ProjectArticle />} />
              </Routes>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
