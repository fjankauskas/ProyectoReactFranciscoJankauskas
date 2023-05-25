import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'


const ItemDetail = ({id, nombre, img, precio, cantidad}) => {

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
            <ItemCount inicial={1} stock={5} onAdd={(cantidad) => console.log('Cantidad agregada ',cantidad)}/>
        </footer>
    </div>
    </div>
</div>
    )
}

export default ItemDetail
