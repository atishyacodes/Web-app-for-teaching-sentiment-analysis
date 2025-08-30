import { Home, BookOpen, Play, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-primary to-accent text-purple p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold flex items-center gap-2 fun-text">
          <Star className="text-yellow-300 animate-spin" size={28} />
          <span>Emotion Explorer</span>
          <Star className="text-yellow-300 animate-spin" size={28} />
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="flex items-center gap-2 hover:underline text-lg bg-blue/20 px-4 py-2 rounded-full">
            <Home size={20} /> Home
          </Link>
          <Link to="/story" className="flex items-center gap-2 hover:underline text-lg bg-blue/20 px-4 py-2 rounded-full">
            <BookOpen size={20} /> Story
          </Link>
          <Link to="/play" className="flex items-center gap-2 hover:underline text-lg bg-blue/20 px-4 py-2 rounded-full">
            <Play size={20} /> Playground
          </Link>
        </div>
      </div>
    </nav>
  )
}