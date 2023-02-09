import { Action } from '@remix-run/router'
import {useReducer, useState} from 'react'

const HookUseReducer = () => {
    //1 - começando com o useReducer

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    //2 - useReducer mais avançado
    const initialTask = [
      {id:1, text:"Fazer alguma coisa"},
      {id:2, text:"Fazer outra coisa"}
    ]

    const taskReducer = (state, action) => {
      switch(action.type){
        case "ADD":
          const newTask = {
            id: Math.random(),
            text: taskText,
          }
          setTaskText("")

          return [...state, newTask]
          case "DELETE":
            return state.filter((task) => task.id !== action.id)
          default:
            return state
      }
    }


    const [taskText, setTaskText] = useState("")
    const [tasks, dispathTasks] = useReducer(taskReducer, initialTask)


    const handleSubmit = (e) => {
      e.preventDefault()

      dispathTasks({type: "ADD"})
    }

    const removeTask = (id) => {
      dispathTasks ({type: "DELETE", id})
    }

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar Número</button>
        <hr />
        <h2>UseReducer com actions</h2>
        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTaskText(e.target
            .value)} value={taskText}/>
            <input type="submit" value="Enviar" />
        </form>
        {tasks.map((tasks) => (
          <li key={tasks.id} onDoubleClick={() => removeTask(tasks.id)}>{tasks.text}</li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer