import Terminal from './components/Terminal'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Terminal />
      </div>
    </ErrorBoundary>
  )
}

export default App
