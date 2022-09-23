import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItemList = ({ id, img, title, price, quantify, totalPrice }) => {
    const { removeProduct } = useContext(CartContext)
    return (
        <>
            <div className="productInCart" id={id}>
                <div>
                    <img className="imagenProductoEnCarrito" src={img} />
                </div>
                <div className="detallesProductoEnCarrito">
                    <h5 className="tituloProductoEnCarrito">{title}</h5>
                    <h6>Cantidad: {quantify} - Precio: ${price}</h6>
                    <h6>Total: ${totalPrice}</h6>
                </div>
                <div>
                    <button className='btn btn-circle' onClick={() => removeProduct(id)}>X</button>
                </div>
            </div>

        </>
    )
}

export default CartItemList