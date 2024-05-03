import Navbar from "./Navbar/Navbar";
import Hero from "./HeroSection/Hero";
import Organizations from "./Organizations/Organizations";
import Search from "./Serarch Bar/Search";
import HackathonCard from "./HackathonCard/HackathonCard";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar /> <Hero /> <Organizations /> <Search /> <Footer/>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/hackathons" element={<HackathonCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
