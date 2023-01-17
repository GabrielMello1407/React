import './App.css';
import Myform from './components/Myform';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <Myform user={{name: "Josias", email:"josias@gmail.com", bio:"Sou um progamador", role:"admin"}}/>
    </div>
  );
}

export default App;
