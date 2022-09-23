import products from '../../products';
import { useParams } from 'react-router-dom';

const getItemDetail = () => new Promise((res) => {
    const { itemId } = useParams();
    setTimeout(() => res(products.find(product => product.id === Number(itemId))
    ), 1500)
})

export default getItemDetail