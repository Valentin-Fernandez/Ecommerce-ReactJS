import { getProductos, getProductosByCategory } from "../../asyncMock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    
    const { categoriaId } = useParams()

    useEffect(() => {
        const asyncFunc = categoriaId ? getProductosByCategory : getProductos

        asyncFunc(categoriaId)
            .then(respuesta => {
                setProducts(respuesta)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoriaId])

    return(
        <ItemList products={products}></ItemList>
    )

}

export default ItemListContainer


