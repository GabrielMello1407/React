import logo from './logo.svg';
import './App.css';
//imagem importada do assets
import City from './assets/city.jpg'
import MenageData from './components/MenageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />{/*Em public só utilizar a barra para acessar a imagem */}
        {/*Imagem em asset */}
        <img src={City} alt="Cidade" />
        <MenageData/>
        <ListRender/>
        <CondicionalRender/>
      </div>
    </div>
  );
}

export default App;
