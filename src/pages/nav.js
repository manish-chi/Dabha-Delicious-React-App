
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
       <header>
        <nav className="nav">
            <ul>
                <Link  to="/signup">Sign Up</Link>
                <Link  to="/login">Login</Link>
                <Link  to="/about">About</Link>
                <Link  to="/contact">Contact-Us</Link>
            </ul>
        </nav>
       </header>
    );
}

export default NavBar;