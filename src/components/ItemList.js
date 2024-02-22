import Item from "./Item";
import './ItemList.css'

function ItemList ( {products} ) {
    return (
        <div className="conteiner-products">
            {products.map(producto => <Item key={producto.id} {...producto}></Item>)}
        </div>
    )
}

export default ItemList