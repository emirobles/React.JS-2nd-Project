import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
    const [carrito, setCart] = useState([])
    const addToCart = (item, quantify) => {
        if (productInCart(item.id)) {
            setCart(carrito.map(product => {
                return product.id === item.id ? { ...product, quantify: product.quantify + quantify } : product
            }))
        } else {
            setCart([...carrito, { ...item, quantify }])
        }
    }
    const cleanCart = () => setCart([])
    const productInCart = (id) => carrito.find(product => product.id === id) ? true : false
    const removeProduct = (id) => setCart(carrito.filter(product => product.id !== id))

    console.log('productos', carrito)
    return (
        <CartContext.Provider value={{ carrito, addToCart, cleanCart, productInCart, removeProduct }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider