
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Service from "./Components/Services";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Service/>}/>                
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
