import './App.css';
import CarDetails from './components/CarDetails';
function App() {
  const cars = [
    {id:1, brand:"Ford", color:"Cinza", km:0},
    {id:2, brand:"Renault", color:"Preta", km:10000},
    {id:3, brand:"Porshe", color:"Vermelha", km:0},
    
  ]
  return (
    <div className="App">
     {/*Realizando Loop dos carros em array de objetos */}
     <h1>Venda de Carros</h1>
     <div className="car-container">
       {cars.map((car) =>(
        <CarDetails
        key={car.id}
        color={car.color}
        km={car.km}
        brand={car.brand}
        />
       ))}
     </div>
    </div>
  );
}

export default App;
