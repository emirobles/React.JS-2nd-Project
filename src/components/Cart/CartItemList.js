import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import './cart.css'
import { Link } from 'react-router-dom'


const CartItemList = () => {
    const { carrito, totalPrice, cleanCart } = useContext(CartContext)

    return (
        <>
            {carrito.map(product => <CartItem key={product.id} product={product} />)}
            <div>
                <Link to='/checkout/'>
                    <button className='btn btn-circle-endCart'>Terminar Compra</button>
                </Link>
                <button onClick={() => cleanCart()} className='btn btn-circle-cleanCart'> Eliminar productos </button>
            </div>  
            <h4 className='totalPrice'> Total: $ {totalPrice()} </h4>

        </>
    )
}

export default CartItemList