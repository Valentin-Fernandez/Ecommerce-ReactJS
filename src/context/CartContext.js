import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log('Carrito', cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = () => {
        return cart.reduce((prev,act) => prev + act.quantity * act.price, 0)
    }

    const totalQuantity = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    return ( 
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            { children }
        </CartContext.Provider>
    )
}