// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './HeroSection/Hero';
import Organizations from './Organizations/Organizations';
import Search from './Serarch Bar/Search';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="pt-16">

        <div className="container mx-auto bg-gray-300/25 px-10 py-5" style={{minHeight: "540px"}}>
          <h2 className="text-3xl font-bold">Hackathon Display Project</h2>
        </div>

      </div> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={} />
          <Route path="/about" element={} />
          <Route path="/contact" element={} />
          <Route path="/contact" element={} />
        
        </Routes>
      </BrowserRouter> */}

      <Navbar/>
      <Hero/>
      <Organizations/>
      <Search/>

    </>
  )
}

export default App
