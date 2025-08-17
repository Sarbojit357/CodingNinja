import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold underline text-red-500">Test</h1>

      <button
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        onClick={() => setCount((c) => c + 1)}
      >
        Count is {count}
      </button>
      <p className="text-gray-600">
        If “Test” is large, bold, underlined, and red, Tailwind is working.
      </p>
    </div>
  )
}

export default App
