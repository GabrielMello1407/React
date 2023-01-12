const TemplateExpressions = () => {

    const name = 'Gabriel'
    const data = {
        age: 31,
        job: "Progammer",
    }
    return(
    <div>
        <h1>Olá {name}, tudo bem?</h1>{/*Impresso o valor da variavel entre chaves*/}
        <p>Você atua como :{data.job}</p>
        <p>{4 + 4}</p>
        <p>{console.log("JSX React")}</p>
    </div>

    )
}

export default TemplateExpressions