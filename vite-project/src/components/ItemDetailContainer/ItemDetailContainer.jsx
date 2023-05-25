import { useState, useEffect } from "react"
import {getProductById,getProducts} from '../../asyncMock.js'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    const {itemId} = useParams()
    
    useEffect(() =>{
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
    }, [itemId])


return (
        <div className="itemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer