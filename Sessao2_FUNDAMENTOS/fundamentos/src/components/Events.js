const Events = () => {
        const handleMyEvent = (e) => {
            console.log(e)

        console.log("Ativou o evento")}


            //Função de renderização fora do JSX , realizando chamada após feita dentro do JSX
            const renderSomething = (x) => {
                if (x){
                    return <h1>Renderizando isso!</h1>
                }else{
                    return <h1>Também posso renderizar isso!</h1>
                }
            }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                {/*Evento de click */}<button onClick={() => console.log('Clicou')}>Clique aqui tambem</button>
                {/*Função no proprio evento */}
                <button onClick={()=>{
                    if(true){
                        console.log('Isso não deveria existir')
                    }
                }}>Clique aqui, por favor</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}
export default Events