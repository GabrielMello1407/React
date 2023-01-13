import { useState } from "react"

const MenageData = () => {
    let someData = 10

    console.log(someData)

    const [Number, setNumber] =  useState(15)/*DECLARAÇÃO DO USESTATE */

    console.log(Number)
  return (
    <div>
        <div>
            <p>Valor:{someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variável</button>
        </div>
        <div>
            <p>Valor: {Number}</p>
            <button onClick ={() => setNumber(25)}>Mudar o State</button>
        </div>
    </div>
  )
}

export default MenageData