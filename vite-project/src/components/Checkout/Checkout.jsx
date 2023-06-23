import React, { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase/FirebaseConfig";
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    
    const { cart, total, clearCart } = useContext(CartContext);
    
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
        const objOrder = {
            buyer: {
            name,
            phone,
            email
            },
            items: cart,
            total: calculateTotal(),
            date: Timestamp.fromDate(new Date())
        };

        const batch = writeBatch(db);
        const outOfStock = [];
        const ids = cart.map(prod => prod.id);
        
        if (ids.length > 0) {
            const productsRef = collection(db, 'products');
            const productsAddedFromFirebase = await getDocs(query(productsRef, where(documentId(), "in", ids)));
            const { docs } = productsAddedFromFirebase;

            docs.forEach(doc => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.cantidad;

            const productAddedToCart = cart.find(prod => prod.id === doc.id);
            const prodQuantity = productAddedToCart?.quantity;

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { cantidad: stockDb - prodQuantity });
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc });
            }
            });
        } else {
            console.error('No hay productos en el carrito');
            return;
        }

        if (outOfStock.length === 0) {
            await batch.commit();

            const orderRef = collection(db, 'orders');
            const orderAdded = await addDoc(orderRef, objOrder);
            setOrderId(orderAdded.id);
            clearCart();
        } else {
            console.error('Productos fuera de stock');
        }
        } catch (error) {
        console.log(error);
        } finally {
        setLoading(false);
        }
    };
    
    const calculateTotal = () => {
        let calculatedTotal = 0;
        cart.forEach(item => {
        calculatedTotal += item.price * item.quantity;
        });
        return calculatedTotal;
    };
    
    if (loading) {
        return <h1>Se está generando su compra</h1>;
    }
    
    if (orderId) {   
        return <h1>El ID de su compra es: {orderId}</h1>;
    }
    
    return (
        <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
        </div>
        )}

    export default Checkout
