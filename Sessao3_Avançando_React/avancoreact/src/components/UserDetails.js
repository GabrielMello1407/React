import React from 'react'

const UserDetails = ({name,age,profession}) => {
  
  
    return (

    <div>
        <h2>{name}</h2>
        <ul>

            <li>Idade:{age}</li>
            <li>Profissão:{profession}</li>
            {age >=18 ? (<p>Pode tirar a carteira de Habilitação </p>) : (
                <p>Menor de idade.</p>
            )}
        </ul>
    </div>
  )
}
export default UserDetails