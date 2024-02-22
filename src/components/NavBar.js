import { NavLink, Link } from "react-router-dom";
import './NavBar.css';

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
            </nav>
        </header>
    )
}

export default NavBar