import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'

const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext)
    return(
        <div className="conteiner">
            <div className="conteiner-carrito">
                <h2>{item.title}</h2>
                <p>Precio: {item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal ${item.quantity * item.price}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem;