const storyData = [
  {
    title: "🌟 Meet Alex and Zara!",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-blue/80 p-4 rounded-xl">
          <div className="bg-blue-100 p-3 rounded-full">
            <span className="text-3xl">👦</span>
          </div>
          <p className="text-lg"><b>Alex</b> loves computers and robots!</p>
        </div>
        <div className="flex items-center gap-4 bg-blue/80 p-4 rounded-xl">
          <div className="bg-pink-100 p-3 rounded-full">
            <span className="text-3xl">👧</span>
          </div>
          <p className="text-lg"><b>Zara</b> is great at understanding feelings!</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl mt-4 border-2 border-yellow-300">
          <p className="text-lg">Their teacher asked: <b>"Can computers understand how people feel from what they write?"</b></p>
        </div>
      </div>
    ),
    exercise: null
  },
  // Rest of story pages with similar interactive updates
];
export default function Story() {
  return (
    <div className="p-6">
      {storyData.map((page, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-bold">{page.title}</h2>
          <div>{page.content}</div>
        </div>
      ))}
    </div>
  )
}