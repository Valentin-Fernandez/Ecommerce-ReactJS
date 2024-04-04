import './ItemDetail.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, title, image, price }) => {
    const [cantidad, setCantidad] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setCantidad(quantity)

        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }

    return (
        <article className='conteiner-detail'>
            <h2>{title}</h2>
            <img src={image} alt={title}></img>
            <p>${price}</p>
            <div className='contador'>
                <button onClick={ () => setCantidad(cantidad-1)} disabled={cantidad === 1}>-</button>
                <span>{cantidad}</span>
                <button onClick={ () => setCantidad(cantidad+1)}>+</button>
            </div>
            <button className='agregar-carrito' onClick={() => handleOnAdd(cantidad)}>Agregar al carrito</button>
        </article>
    );
}


export default ItemDetail;