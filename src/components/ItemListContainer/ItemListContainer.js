import React from 'react';
import ItemList from './ItemList';
import './itemListContainer.css'
import { useState, useEffect } from 'react';
import products from '../../products';
import { useParams } from 'react-router-dom';
import { getItems } from '../firebase-api';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        /*const getProductos = () => new Promise((res) => {
            setTimeout(() => {
                res(products)
            }, 1000)
        })
        if (categoryId) {
            getProductos().then(res => setProductos(res.filter((res) => res.category === categoryId)))
        } else {
            getProductos().then(res => setProductos(res))
        }*/
        //Solo iria este codigo para la entrega Item Collection I
        if (categoryId) {
            getItems()
            .then(res => setProductos(res.filter((res) => res.category === categoryId)))
        } else {
            getItems()
            .then(res => setProductos(res))
        }
    }, [categoryId])

    return (
        <>            
            <ItemList productos={productos} />
        </>
    )
}
export default ItemListContainer