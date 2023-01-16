import style from './CarDetails.module.css'
const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h2 className={style.titulo}>Detalhes do carro</h2>
        <ul className={style.lista}>
            <p>Marca:{brand}</p>
            <p>KM:{km}</p>
            <p>Cor:{color}</p>
        </ul>
    </div>
  )
}

export default CarDetails