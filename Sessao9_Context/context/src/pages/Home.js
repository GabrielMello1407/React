//import {useContext} from 'react'
import ChangeCounter from '../components/ChangeCounter'
import {CounterContext} from '../context/CounterContext'
//import {changeContext} from '../context/CounterContext'

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

//5 - context complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  //const {counter} = useContext(CounterContext)
  const{counter} = useCounterContext()

  //5-contexto mais complexo
  const {color, dispatch} = useTitleColorContext()
  console.log(color)

  //6- alterando state complexo
  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (

    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador:{counter}</p>
        {/*Alterando valor contexto */}
        <ChangeCounter/>
        {/*6- alterando contexto compelxo */}
        <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>
    </div>
  )
}

export default Home