import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({id, nombre, img, precio, cantidad}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }

return (
    <div className="card mb-3" style={{ width: "540px" }}>
        <div className="row g-0">
        <div className="col-md-4">
        <img src={img} className="card-img-top" alt={img}/>
        </div>
        <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Precio: {precio}</p>
            <p className="card-text">Cantidad Disponible: {cantidad}</p>
            </div>
        <footer className="ItemFooter">
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Finalizar compra</Link>
                ) : (
                    <ItemCount inicial={1} stock={cantidad} onAdd={handleOnAdd}/>
                )
            }
        </footer>
    </div>
    </div>
</div>
    )
}

export default ItemDetail
