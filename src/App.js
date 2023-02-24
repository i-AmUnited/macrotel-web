import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './Pages/Landing/landingPage';
import Connect from './Pages/connect'
import AboutUs from './Pages/aboutUs'
import Products from './Pages/products'
// import Navbar from './Components/navBar';
import Footer from './Components/footer';




function App() {

  return (
    <div>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/connect" element={<Connect />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
   
    </div>

  );
}

export default App;
