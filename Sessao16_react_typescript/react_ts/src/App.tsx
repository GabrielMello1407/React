import React, { createContext } from 'react';
//4 - importação de components
import FirstComponent from './components/FirstComponent';
//5- desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';
import { Category } from './components/Destructuring';
//6- useState
import State from './components/State';

//7- type
type textOrNull = string | null


function App() {

  //1- variaveis
  const name: string = 'Gabriel'
  const age: number = 30
  const isWorking: boolean = true

  //2- funções
  const userGreeting = (name: string): string => {
    return `Olá , ${name}!` 
  }

  //7- type
  const myText:textOrNull = 'Tem algum texto aqui'
  let mySecondText:textOrNull = null//null é considerado como falso na condicional

  //mySecondText = 'Opa'

  type fixed = 'isso' | 'aquilo' | 'ou'

  //9- context
  interface IAppContext{
    language: string,
    framework: string,
    projects: number,
  }

  const testandoFixed: fixed = 'isso'

  //9- context
  const contextValue: IAppContext = {
    language: 'Javacript',
    framework: 'Express',
    projects: 5,
  };

   const AppContext = createContext<IAppContext | null>(null)

  return (
    
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com react</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      {/*4-Importando componente */}
      <FirstComponent/>
      <SecondComponent name="Segundo"/>
      <Destructuring 
      title='Primeiro post' 
      content='Algum conteúdo' 
      commentsQty={10} 
      tags={['ts','js']}
      category={Category.TS}/>
      <Destructuring 
      title='Segundo post' 
      content='Outro conteúdo' 
      commentsQty={20} 
      tags={['ts','js','java']}
      category={Category.P}/>
      <State/>
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
    </div>
    </AppContext.Provider>
  );
}

export default App;
