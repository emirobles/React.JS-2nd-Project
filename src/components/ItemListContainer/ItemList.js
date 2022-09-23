import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        <>
            {
                productos.map(item =>
                    <Item
                        item={item}
                        key={item.id}
                        imagen={item.img}
                        category={item.category}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        stock={item.stock} />
                )
            }
        </>
    )
}

export default ItemList