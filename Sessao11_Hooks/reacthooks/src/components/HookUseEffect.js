import {useEffect, useState} from 'react'

const HookUseEffect = () => {
    //1 - useEffect, sem dependências
    useEffect(() => {
        console.log("Estou em execução")
    })

    const [number, setNumber] = useState(1)
    const changeSomething = () => {
        setNumber(number +1)
    }

    //2 - Array de dependencias vazio
    useEffect (() => {
        console.log("Serei executado uma vez")
    },[])

    //3 - item no array de dependencia
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if (anotherNumber > 0){
            console.log("Estou sendo executado apenas quando o anotherNumber Muda")
        }
    },[anotherNumber])

    // 4- cleanup do useEffect
    useEffect (() => {

       //const timer = setTimeout(() =>{
            //console.log("Hello World")
            //setAnotherNumber(anotherNumber + 1)
       //}, 2000)
       // return () => clearTimeout(timer)
    },[anotherNumber])
  return (
    <div>
        <h2>useEffect</h2>
        <p>Númbero: {number}</p>
        <button onClick={changeSomething
        }>Executar</button>
        <p>Another Number:{anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber!</button>
        
        <hr />
    </div>
  )
}

export default HookUseEffect