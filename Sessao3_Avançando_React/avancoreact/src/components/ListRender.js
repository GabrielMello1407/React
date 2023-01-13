import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Gabriel"])

    const[Users, setUsers] = useState([
        {id:1, name: "Gabriel", age:31},
        {id:2, name: "Jorge", age: 35},
        {id:3, name:"João", age: 65},
    ])
    {/*Função que deleta um usuario aleatorio */}
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>{/*Item key */}
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}{/*Método map */}
        </ul>
        <ul>{/*Mapeando os users utilizando a função key */}
            {Users.map((user) =>(
               <li key = {user.id} > {user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender