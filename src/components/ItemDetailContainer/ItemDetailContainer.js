import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.js'
import product from '../../products';
import {getItemById} from '../firebase-api';

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})
    //Codigo a ocupar para Item Collection I (El useEffect de abajo no iría)
    /*useEffect(() => {
        getItemById(itemId).then(item => setItem(item))
    }, [itemId])*/ 

    useEffect(() => {
        getItemDetail().then(res => setItem(res.find((product) => Number(product.id) === Number(itemId))))
    }, [])
    const getItemDetail = () => new Promise((res, rej) => {
        setTimeout(() =>
            res(product),
            900)
    })
    return (
        <div className='contenedorItemDetail'>
            <ItemDetail products={item} />
        </div>
    )
}

export default ItemDetailContainer