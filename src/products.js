import img1 from './assets/imagenes/aros_tanjiro.jpg'
import img2 from './assets/imagenes/shinobu.jpg'
import img3 from './assets/imagenes/tanjiro.jpg'
import img4 from './assets/imagenes/haori-tomioka.jpg'
import img5 from './assets/imagenes/billetera-nezuko.png'
import img6 from './assets/imagenes/alcancia-inosuke.png'
import './products.css';

const products = [
    { id: 1, title: "Aros de Tanjiro", description: "Aros originales de acero quirurgico.", category: "indumentaria", price: 350, stock: 672, img: img1 },
    { id: 2, title: "Peluche Shinobu", description: "Peluche importado, de 25cm. de alto. Excelente calidad", category: "peluches", price: 2500, stock: 22, img: img2 },
    { id: 3, title: "Peluche Tanjiro", description: "Peluche importado, de 25cm. de alto. Excelente calidad", category: "peluches", price: 2800, stock: 34, img: img3 },
    { id: 4, title: "Haori Tomioka", description: "Haori sublimado con diseño propio de Tomioka. Tela:Microfibra", category: "indumentaria", price: 3500, stock: 410, img: img4 },
    { id: 5, title: "Billetera Nezuko", description: "Billetera importada. Material: Goma y cuerina ecologica", category: "indumentaria", price: 1500, stock: 480, img: img5 },
    { id: 6, title: "Alcancia Inosuke", description: "Alcancia importada - Material PVC", category: "peluches", price: 2500, stock: 103, img: img6 }
]

export default products