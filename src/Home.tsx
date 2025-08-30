import { Link } from 'react-router-dom'
import { BookOpen, Smile, Frown, Meh } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-primary mb-6 fun-text">
          Welcome to <span className="text-accent">Emotion Explorer!</span>
        </h1>
        <p className="text-2xl mb-8 bg-blue p-4 rounded-xl shadow-md">
          Discover how computers understand feelings with our super fun adventure!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Link 
            to="/story" 
            className="bg-gradient-to-br from-secondary to-accent p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-white"
          >
            <div className="flex flex-col items-center text-blue">
              <BookOpen size={60} className="mb-4 animate-float" />
              <h2 className="text-3xl font-bold mb-2 fun-text">Story Time!</h2>
              <p className="text-xl">Join Alex and Zara's exciting journey</p>
            </div>
          </Link>
          
          <Link 
            to="/play" 
            className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-white"
          >
            <div className="flex flex-col items-center text-blue">
              <div className="flex gap-4 mb-4">
                <Smile className="animate-bounce" size={40} />
                <Frown className="animate-bounce-slow" size={40} />
                <Meh className="animate-bounce" size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-2 fun-text">Play Zone</h2>
              <p className="text-xl">Try our emotion detector yourself!</p>
            </div>
          </Link>
        </div>

        <div className="mt-16 bg-blue p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-primary mb-4 fun-text">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📖', text: 'Learn through fun stories' },
              { icon: '🎮', text: 'Play with our emotion detector' },
              { icon: '🏆', text: 'Become an emotion expert!' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-yellow-100 to-blue-100 p-4 rounded-xl border-2 border-accent">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}