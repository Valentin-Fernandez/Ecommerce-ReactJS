import './ItemDetail.css'
import { useState } from 'react';


const ItemDetail = ({ product }) => {
    const [cantidad, setCantidad] = useState(1)

    if (!product) {
        return <p>Cargando...</p>;
    }

    return (
        <article className='conteiner-detail'>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title}></img>
            <p>${product.price}</p>
            <div className='contador'>
                <button onClick={ () => setCantidad(cantidad-1)} disabled={cantidad === 1}>-</button>
                <span>{cantidad}</span>
                <button onClick={ () => setCantidad(cantidad+1)}>+</button>
            </div>
            <button className='agregar-carrito'>Agregar al carrito</button>
        </article>
    );
}


export default ItemDetail;