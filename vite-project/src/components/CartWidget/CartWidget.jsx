import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () =>{
    const { totalProducts } = useContext(CartContext)

    return (
        <Link to='/cart'>
            <div>
            <FontAwesomeIcon icon={faShoppingCart}/>
            {totalProducts() || ''}
            </div>
            
        </Link>
    )
}

export default CartWidget


// export const CartWidget = () => {
// return (
//     <div>
//         <FontAwesomeIcon icon={faShoppingCart} />
//         0
//     </div>
// );
// }

// export default CartWidget;