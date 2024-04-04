import React from "react";
import './CartWidget.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
            <Link to='/cart'>
                <i className="bi bi-bag"></i>
                { totalQuantity }
            </Link>    
    )
}

export default CartWidget;