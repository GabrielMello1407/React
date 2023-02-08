import { Action } from '@remix-run/router'
import {useReducer} from 'react'

const HookUseReducer = () => {
    //1 - começando com o useReducer
    const [number, dispatch] = useReducer((state, action)) => {
        return Math.random(state)
    }
  return (
    <div>
        <h2>useReducer</h2>

        <hr />
    </div>
  )
}

export default HookUseReducer