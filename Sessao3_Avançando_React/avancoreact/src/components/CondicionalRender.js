import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState("Matheus")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, Sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>If ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é joão</p>
            </div>
        ): (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Clica aqui!</button>
    </div>
  )
}

export default CondicionalRender