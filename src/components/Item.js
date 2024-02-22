import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, title, image, price}) => {
    return(
        <article className='products' key={id}>
            <h2>
                {title}
            </h2>
            <img src={image} alt={title}></img>
            <p>${price}</p>
            <Link to={`/item/${id}`}>Ver mas detalles</Link>
        </article>
    )
}

export default Item;