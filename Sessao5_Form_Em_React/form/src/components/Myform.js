import "./Myform.css"
import {useState} from 'react'
const Myform = ({user}) => {
    //6 - controlled inputs
    // 3- GERENCIAMENTO DE DADOS

    const[name, setName] = useState(user ? user.name : '')
    const[email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : '')

    const [role,setRole] = useState(user ? user.role : '')


    const handleName = (e) => {
        setName(e.target.value)
    }
    console.log(name)
    console.log(email)
    {/*5- envio de form */}
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Enviando Formulário")
        console.log(name,email,bio,role)
    //validação
    //envio
    //7 - Limpar form
        setName("")
        setEmail("")
        setBio("")
    }

  return (
    <div>
        {/*5- envio de form */}
        {/*1-Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label><input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} 
                value={name}
                />
            </div>
            {/*2- label envolvendo input */}
            <label>
                {/*4- Simplificação de manipulação de state */}
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite seu E-mail" onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </label>
            {/*8- textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do Usuário" onChange={(e => setBio(e.target.value))} value={bio}></textarea>
                </label>
                {/*9- Select */}
                <label>
                    <span>Função no Sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Myform