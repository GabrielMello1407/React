import MyComponent from "./MyComponent"

const FirstComponent = () => {

    return(//JSX é o HTML do react E PARA colocar o comentario que entra mais linhas utilizar {/**/ } entre chaves
        <div>{/*Exemplo de comentario*/}
            <h1>Meu Primeiro Componente</h1>
            <p className="teste">Meu Texto</p>
            <MyComponent/>{/* IMPORTADO DENTRO DO PAI */}
        </div>
    )
}

export default FirstComponent