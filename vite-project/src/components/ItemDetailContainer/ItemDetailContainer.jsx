import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

import { getDoc, doc } from "firebase/firestore"
import { db } from '../../services/firebase/FirebaseConfig.jsx'

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)
        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProducts(productAdapted)
        })
        .finally(() =>{
            setLoading(false)
        })
    }, [itemId])


    return (
        <div className="itemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer

    



