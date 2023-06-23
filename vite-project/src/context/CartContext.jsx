import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) =>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        } else{
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(product => product.id === itemId)
    }

    const totalPrice = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice, totalProducts }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext
