import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'


const Cart = () => {
    const {cart, clearCart, totalPrice} = useContext(CartContext)

    if(cart.length === 0 ) {
        return (
            <div>
                <h1>No hay Items en el carrito</h1>
                <Link to='/' className='Option'>Hacer compras</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(product => <CartItem key={product.id} product={product}/>)}
            <h3>Total: ${totalPrice()}</h3>
            <button onClick={() => clearCart()} className='btn btn-primary'>Vaciar carrito</button>
            <Link to='/checkout' className='Option'><button className='btn btn-primary'>Checkout</button></Link>
        </div>
    )
}

export default Cart