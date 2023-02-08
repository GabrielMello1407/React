import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    //1- useState
    let userName = 'João'

    const [name, setName] = useState('Matheus')

    const changeNames = () => {
        userName= 'João souza'
        
        setName("Gabriel Mello")

        
        console.log(userName)
    }
    console.log(name)

    // 2 - use state e input
    const [age, setAge] = useState(18)
    const handleSubmit = (e) =>{
        e.preventDefault()

        //envio a uma API
        console.log(age)
    }

  return (
    <div>
        {/*1 - useState */}
        <hr />
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar Nomes!</button>
        <hr />
        {/*2 - useState e input */}
        <h2>UseState com inputs</h2>
        <form onSubmit={handleSubmit}>
            <p>Digite sua idade</p>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
        <p>Voce tem {age} anos!</p>
        <hr />
    </div>
  )
}

export default HookUseState