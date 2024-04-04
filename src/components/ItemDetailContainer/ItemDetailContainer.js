import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                console.log('respuesta', response)
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[itemId])


    return(
        <div>
            <ItemDetail {...product}></ItemDetail>
        </div>
    )

}

export default ItemDetailContainer;