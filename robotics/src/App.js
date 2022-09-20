import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact-us/Contact";
import Join from "./components/join/Join";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/join" element={<Join/>} />
        </Routes>
        <Footer />   
      </div>
    </BrowserRouter>
  );
}

export default App;
