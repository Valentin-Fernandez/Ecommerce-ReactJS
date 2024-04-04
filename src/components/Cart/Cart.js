
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    console.log("Valor de total:", total);

    const order = {
        buyer: {
            name: 'Valentin',
            email: 'fernandez@gmail.com',
            phone: '35671367',
            address: 'adsadad'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: total(),
    }


    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then(({ id }) => {
            console.log(id)
            setOrderId(id)
        })
        .catch(error => {
            console.error('Error', error)
        })
    }

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
            </div>
        )
    }


    return ( 
        <div>
            { cart.map(item => <CartItem key={item.id} item={item}></CartItem>)}
            <div className="conteiner">
                <button onClick={() => clearCart()} className="Button">Vaciar Carrito</button>
                <h3>Total: ${total()}</h3>
            </div>
            <button className="option" onClick={handleClick}>Checkout</button>
            {orderId && <p className='Orden'>ID de la Orden: {orderId}</p>} 
        </div>
    )

}

export default Cart;