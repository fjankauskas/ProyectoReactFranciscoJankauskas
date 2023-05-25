import "../ItemList/itemlist.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, nombre, img, precio, cantidad }) => {
return (
    <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={img} />
        <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio: {precio}</p>
        <p className="card-text">Cantidad Disponible: {cantidad}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">Ver Detalles</Link>
    </div>
        <footer className="ItemFooter">
            <ItemCount inicial={1} stock={5} onAdd={(cantidad) => console.log('Cantidad agregada ', cantidad)} />
        </footer>
    </div>
)
};

export default Item;