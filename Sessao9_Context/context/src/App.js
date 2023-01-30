import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"



import './App.css';
import Navbar from "./components/Navbar";

//pages
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
