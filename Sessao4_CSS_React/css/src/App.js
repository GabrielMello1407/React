import './App.css';
import Mycomponent from './components/Mycomponent';

import {useState} from 'react'
import Title from './components/Title';
function App() {
  const n = 15
  const [name] = useState("Matheus")

  const redTitle = (true)
  return (
    <div className="App">
      {/*Css global */}
      <h1>React com CSS</h1>
      {/*Css de componente */}
      <Mycomponent/>
      <p>Este parágrafo é do app.js</p>
      {/*Inline CSS */}
      <p 
      style={{ color: "magenta", padding:"25px", borderTop: "2px solid red"}}
      >Este elemento foi estilizado de forma inline</p>
      <p style={{ color: "magenta", padding:"25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>

      {/*Css Inline dinâmico */}
      <h2 style={n < 10 ? ({color:"Purple"}) : ({color:"pink"})}>CSS Inline Dinâmico</h2>
      <h2 style={n > 10 ? ({color:"Purple"}) : ({color:"pink"})}>CSS Inline Dinâmico</h2>
      <h2 style={name === "Matheus" ? ({color:"green", backgroundColor:"#000"}) : null}>CSS Inline Dinâmico</h2>
      <h2 style={name === "A" ? ({color:"green", backgroundColor:"#000"}) : null}>CSS Inline Dinâmico</h2>
      {/*Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este Titúlo vai ter classe dinâmica</h2>
      <h2 className={redTitle ? "red-title" : "title"}>Este Titúlo vai ter classe dinâmica</h2>
      {/*CSS Modules */}
      <Title/>
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
