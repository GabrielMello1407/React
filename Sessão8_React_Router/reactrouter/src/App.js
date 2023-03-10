import './App.css';

//1 - config react router
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Infor from './pages/Infor';
import NotFound from './pages/NotFound';

//Components
import Navbar from './components/Navbar';
import Searchform from './components/Searchform';
import Search from './pages/Search';






function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/*2- links com react router */}
        <Navbar/>

          {/*9 - SEARCH */}
          <Searchform/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          {/*6- nested route */}
          <Route path="/products/:id/info" element={<Infor/>} />
          {/*4- Criando nova rota dinamica */}
          <Route path="/products/:id" element={<Product/>} />
          {/*9- Search */}
          <Route path='/search' element={<Search/>} />
          {/*10 - redirect */}
          <Route path='/company' element={<Navigate to='/about'/>}/>
          {/*7- no match route */}
          <Route path='*' element={<NotFound/>}/>




        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
