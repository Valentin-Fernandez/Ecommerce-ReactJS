import { NavLink, Link } from "react-router-dom";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <header>
            <nav>
                <Link to='/'>
                    <h1 className="titulo-principal">Ecommerce</h1>
                </Link>
                <div className="paginas-conteiner">
                    <NavLink to={`/categoria/notebook`} className="paginas">Notebook</NavLink>
                    <NavLink to={`/categoria/tablet`} className="paginas" >Tablet</NavLink>
                    <NavLink to={`/categoria/monitor`} className="paginas" >Monitor</NavLink>
                </div>
                <CartWidget></CartWidget>
            </nav>
        </header>
    )
}

export default NavBar