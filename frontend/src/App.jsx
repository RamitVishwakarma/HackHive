import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="pt-16">

        <div className="container mx-auto bg-gray-300/25 px-10 py-5" style={{minHeight: "540px"}}>
          <h2 className="text-3xl font-bold">Hackathon Display Project</h2>
        </div>

      </div>
    </>
  )
}

export default App
