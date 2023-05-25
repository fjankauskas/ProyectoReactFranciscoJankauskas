import { useState, useEffect } from "react"
import {getProducts,} from '../../asyncMock.js'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() =>{
        getProducts().then((response) => {
        if(categoryId){
        const filterCategory = response.filter(prod => prod.category === categoryId);
        setProducts(filterCategory);
    } else{
            setProducts(response)
        }
    })
}, [categoryId])


return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer