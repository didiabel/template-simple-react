import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/template-simple-react" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/1" element={<Blog/>}/>
        <Route path="/2" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
