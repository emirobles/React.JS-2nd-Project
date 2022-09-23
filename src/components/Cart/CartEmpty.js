import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css'

const CartEmpty = () => {
    return (
        <>
            <div className='cartEmptyContainer'>
                <div className='cartEmpty'>
                    El carrito está vacío...
                </div>
                <Link to='/'>
                    <button className='btn btn-circle-three'>
                        Añadir productos
                    </button>
                </Link>
            </div>
        </>
    )
}

export default CartEmpty