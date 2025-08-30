import { useState } from "react"
import { Smile, Frown, Meh, Sparkles } from "lucide-react"

export default function Playground() {
  // State
  const [text, setText] = useState("")
  const [result, setResult] = useState<null | {
    simple: "positive" | "negative" | "neutral"
    positiveCount: number
    negativeCount: number
  }>(null)

  // Fake analyzer (replace with real logic if you want)
  const handleAnalyze = () => {
    const happyWords = ["happy", "great", "good", "awesome", "love"]
    const sadWords = ["sad", "bad", "angry", "upset", "hate"]

    let positiveCount = 0
    let negativeCount = 0

    text.split(/\s+/).forEach((word) => {
      if (happyWords.includes(word.toLowerCase())) positiveCount++
      if (sadWords.includes(word.toLowerCase())) negativeCount++
    })

    let simple: "positive" | "negative" | "neutral" = "neutral"
    if (positiveCount > negativeCount) simple = "positive"
    else if (negativeCount > positiveCount) simple = "negative"

    setResult({ simple, positiveCount, negativeCount })
  }

  // Example sentences
  const getExamples = (type: "positive" | "negative" | "neutral") => {
    const examples = {
      positive: ["I aced my math test today! 🎉", "Life is beautiful", "I love coding!"],
      negative: ["I failed my exam 😢", "This is the worst day", "I feel so tired and sad"],
      neutral: ["I am going to the park", "It is a sunny day", "I have a meeting later"],
    }
    return examples[type]
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-8 border-4 border-white">
        <h1 className="text-4xl font-bold text-primary mb-6 fun-text text-center">
          <Sparkles className="inline mr-2 text-yellow-400" />
          Emotion Detective
          <Sparkles className="inline ml-2 text-yellow-400" />
        </h1>

        {/* Input */}
        <div className="mb-8 bg-blue p-6 rounded-2xl shadow-md border-2 border-accent">
          <label htmlFor="text-input" className="block text-xl font-medium mb-2 text-primary">
            Type a sentence and discover its emotion:
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-4 border-2 border-secondary rounded-xl focus:border-primary focus:outline-none text-lg"
            rows={4}
            placeholder="Example: I aced my math test today! 🎉"
          />

          <button
            onClick={handleAnalyze}
            disabled={!text.trim()}
            className="mt-4 bg-gradient-to-r from-primary to-accent text-blue px-8 py-4 rounded-xl disabled:opacity-50 text-xl font-bold hover:shadow-lg transition-all"
          >
            Detect Emotion! 🔍
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 fun-text text-center">Results:</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border-2 border-positive shadow-md">
                <h3 className="font-bold mb-2 text-lg">Simple Word Counting</h3>
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-full ${
                      result.simple === "positive"
                        ? "bg-positive/20"
                        : result.simple === "negative"
                        ? "bg-negative/20"
                        : "bg-neutral/20"
                    }`}
                  >
                    {result.simple === "positive" && <Smile size={60} className="text-positive" />}
                    {result.simple === "negative" && <Frown size={60} className="text-negative" />}
                    {result.simple === "neutral" && <Meh size={60} className="text-neutral" />}
                  </div>
                  <div>
                    <p className="text-xl font-medium capitalize">{result.simple}</p>
                    <div className="mt-2">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-positive"></span>
                        <span>Happy words: {result.positiveCount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-negative"></span>
                        <span>Sad words: {result.negativeCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Advanced analysis can go here */}
            </div>
          </div>
        )}

        {/* Examples */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold fun-text text-center">Try These Examples:</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-positive/10 p-4 rounded-2xl border-2 border-positive">
              <h3 className="font-bold text-positive mb-2">😊 Happy</h3>
              <div className="space-y-2">
                {getExamples("positive").map((example, i) => (
                  <button
                    key={`positive-${i}`}
                    onClick={() => setText(example)}
                    className="w-full text-left p-2 bg-blue rounded-lg hover:bg-positive/20 transition-all emoji-button"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
            {/* Add sections for negative and neutral the same way */}
          </div>
        </div>
      </div>
    </div>
  )
}
