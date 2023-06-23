import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ product }) => {
    const { removeItem } = useContext(CartContext);

return (
    <div className="cartItem">
        <h4>{product.nombre}</h4>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: ${product.precio}</p>
        <p>Subtotal: ${product.quantity * product.precio}</p>
        <button onClick={() => removeItem(product.id)}>Eliminar</button>
    </div>
    );
};

export default CartItem;
