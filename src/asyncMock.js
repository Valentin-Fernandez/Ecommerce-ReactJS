import notebookImage1 from './images/notebook-1.jpg';
import notebookImage2 from './images/notebook-2.jpg';
import notebookImage3 from './images/notebook-3.jpg';
import notebookImage4 from './images/notebook-4.png';
import tabletImage1 from './images/tablet-1.jpg';
import tabletImage2 from './images/tablet-2.jpg';
import tabletImage3 from './images/tablet-3.jpg';
import tabletImage4 from './images/tablet-4.jpg';
import monitorImage1 from './images/monitor-1.jpg';
import monitorImage2 from './images/monitor-2.jpg';
import monitorImage3 from './images/monitor-3.jpg';
import monitorImage4 from './images/monitor-4.jpeg';


const listaProductos = [
    {
    "id": 1,
    "title": "Notebook 1",
    "price": 109.95,
    "category": "notebook",
    "image": notebookImage1,
    },
    {
    "id": 2,
    "title": "Notebook 2",
    "price": 109.95,
    "category": "notebook",
    "image": notebookImage2,

    },
    {
    "id": 3,
    "title": "Notebook 3",
    "price": 109.95,
    "category": "notebook",
    "image": notebookImage3,

    },
    {
    "id": 4,
    "title": "Notebook 4",
    "price": 109.95,
    "category": "notebook",
    "image": notebookImage4,

    },
    {
    "id": 5,
    "title": "Tablet 1",
    "price": 109.95,
    "category": "tablet",
    "image": tabletImage1,
    },
    {
    "id": 6,
    "title": "Tablet 2",
    "price": 109.95,
    "category": "tablet",
    "image": tabletImage2,
    },
    {
    "id": 7,
    "title": "Tablet 3",
    "price": 109.95,
    "category": "tablet",
    "image": tabletImage3,
    },
    {
    "id": 8,
    "title": "Tablet 4",
    "price": 109.95,
    "category": "tablet",
    "image": tabletImage4,
    },
    {
    "id": 9,
    "title": "Monitor 1",
    "price": 109.95,
    "category": "monitor",
    "image": monitorImage1,
    },
    {
    "id": 10,
    "title": "Monitor 2",
    "price": 109.95,
    "category": "monitor",
    "image": monitorImage2,
    },
    {
    "id": 11,
    "title": "Monitor 3",
    "price": 109.95,
    "category": "monitor",
    "image": monitorImage3,
    },
    {
    "id": 12,
    "title": "Monitor 4",
    "price": 109.95,
    "category": "monitor",
    "image": monitorImage4,
    },
    ]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaProductos)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    console.log('Llamada a getProductsByID')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaProductos.find(prod => prod.id == productId))
        }, 500)
        })     
}

export const getProductosByCategory = (ProductsByCategory) => {
    return new Promise((resolve) => {
        resolve(listaProductos.filter(prod => prod.category == ProductsByCategory))
    }, 500)
}