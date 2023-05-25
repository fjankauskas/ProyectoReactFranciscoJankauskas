import './itemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, inicial, onAdd}) => {
    const [quantity, setQuantity] = useState(inicial)

    const agregar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const quitar = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

return(
    <div className='counter'>
        <div className='controls'>
            <button className='botonContador' onClick={quitar}>-</button>
            <h3 className='numero'>{quantity}</h3>
            <button className='botonContador' onClick={agregar}>+</button>
        </div>
        <div>
            <button className='botonAgregar' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
        </div>
    </div>
)
}

export default ItemCount