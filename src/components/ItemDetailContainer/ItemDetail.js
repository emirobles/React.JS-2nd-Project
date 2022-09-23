import React, { useContext } from 'react';
import ItemCount from './itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './itemDetail.css'
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

const ItemDetail = ({ products }) => {
    const { addToCart } = useContext(CartContext)
    function onAdd(valor) {
        if (valor < 1) {
            Swal.fire('Debes añadir al menos 1', {
                position: "top-right",
                autoClose: 1700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: false,
            });
        } else {
            addToCart(products, valor)
            Swal.fire(`${valor} Producto(s) añadido(s)`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: false,
            });
        }
    }

    const [valor] = useState(0)

    return (
        <div className='detallesProducto'>
            <h2>Detalles del producto</h2>
            <div className="card" style={{ width: 18 + 'rem' }} id={products.id}>
                <img className="card-img-top" src={products.img} alt="" />
                <div className="card-body">
                    <h3 className="card-title"> {products.title} </h3>
                    <p className="card-text"> $ {products.price} </p>
                    <p> {products.description} </p>
                    {
                        valor == 0 ?
                            <ItemCount stock={products.stock} onAdd={onAdd} />
                            :
                            <div>
                                <Link to='/cart/'>
                                    <button className='btn btn-circle-two'>
                                        Terminar compra
                                    </button>
                                </Link>
                                <hr />
                                <Link to='/'>
                                    <button className='btn btn-circle-two'>
                                        Continuar comprando
                                    </button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default ItemDetail