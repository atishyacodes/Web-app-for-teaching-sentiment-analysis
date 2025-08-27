import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Story from './pages/Story'
import Playground from './pages/Playground'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/play" element={<Playground />} />
        </Routes>
      </div>
    </Router>
  )
}