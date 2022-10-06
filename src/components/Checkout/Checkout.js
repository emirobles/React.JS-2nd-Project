import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { db } from '../../app/FirebaseConfig';
import './Checkout.css'

const Ckechout = () => {
    const { carrito, totalPrice } = useContext(CartContext)
    const [ordenDeCompra, setOrdenDeCompra] = useState({
        buyer: {
            name: '',
            phone: '',
            email: ''
        },
        products: carrito.map(product => ({ id: product.id, title: product.title, category: product.category, price: product.price, quantify: product.quantify })),
        total: totalPrice(),
        date: new Date()
    })

    const comprar = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, ordenDeCompra)
            .then(({ id }) => console.log(id))
    }

    

    return (
        <>
            <h1> Finalizar compra </h1>
            <div className='Checkout'>
                <form className='Formulario' onSubmit={comprar}>
                    <div className='input'>
                        <label>
                            Nombre :
                        </label>
                        <input type="text" value={ordenDeCompra.name} onChange={(e) => setOrdenDeCompra({ ...ordenDeCompra, name: e.target.value })} />
                    </div>
                    <div className='input'>
                        <label>
                            Telefono :
                        </label>
                        <input type="number" value={ordenDeCompra.phone} onChange={(e) => setOrdenDeCompra({ ...ordenDeCompra, phone: e.target.value })} />
                    </div>
                    <div className='input'>
                        <label>
                            Email :
                        </label>
                        <input type="text" value={ordenDeCompra.email} onChange={(e) => setOrdenDeCompra({ ...ordenDeCompra, email: e.target.value })} />
                    </div>
                    <button className='btn btn-circle-sendProduct'>Enviar pedido</button>
                </form>
            </div>

        </>
    )
}

export default Ckechout