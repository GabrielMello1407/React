import logo from './logo.svg';
import './App.css';
//imagem importada do assets
import City from './assets/city.jpg'
import MenageData from './components/MenageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import {useState} from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Gabriel"
  const [userName] = useState("Maria")

  const cars = [
    {id:1, brand:"Ferrari", color:"Amarela", newCar:true, km:0},
    {id:2, brand:"Hyundai", color:"Preta", newCar:false, km:10000},
    {id:3, brand:"Porshe", color:"Vermelha", newCar:true, km:0},
    
  ]
  const people = [
    {id:1, name:"Gabriel", age:22, profession:"Progamador" },
    {id:2 ,name:"Claudio", age:23, profession:"Jornalista" },
    {id:3 ,name:"Roberto", age:26, profession:"Médico" },
    {id:4 ,name:"Rodrigo", age:16, profession:"Desempregado" },
    {id:5 ,name:"Yuri", age:14, profession:"Estudante" },
  ]

  function showMenssage(){
    console.log("Evento componente pai")
  }

  //Variáveis da elevação de state
  const [message, SetMessage] = useState("")
  const handleMessage = (msg) =>{
    SetMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />{/*Em public só utilizar a barra para acessar a imagem */}
        {/*Imagem em asset */}
        <img src={City} alt="Cidade" />
        <MenageData/>

        {/*Renderização de listas */}
        <ListRender/>

        {/*Condicionais na renderização de listas */}
        <CondicionalRender/>

        {/*Props */}
        <ShowUserName name={userName} />
        {/*Destructuring , valores numericos entre chaves e strings em aspas*/}
        
        <CarDetails brand="VW" km={10000} color="Azul" newCar={false}/>

        {/*Reaproveitando PROPS */}
        <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/> 
        <CarDetails brand="Fiat" km={60000} color="Cinza" newCar={false}/> 

        {/*Loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} />
        ))}

        {/*Fragment */}
        <Fragment propFragment= "Teste"/>

        {/*Children */}
        <Container MyValue="teste">
          <p>E esse é o conteúdo</p>
        </Container>
        <Container MyValue="teste2">
          <h5>Testando Container</h5>
        </Container>

        {/*Executar função*/}
        <ExecuteFunction myFunction={showMenssage}/>

        {/*Elevação de state  STATE LIFT*/}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>

        {/*Desafio 04 */}
        {people.map((user) =>(
          <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          profession={user.profession}/>
        ))}
      </div>
    </div>
  );
}

export default App;
