import { Link } from "react-router-dom";
import './Nav.css'
function Nav() {
    return (
      <header className="headerClass sticky">
        <h1>Classic Male Fashion</h1>
        <nav className="navbar">
          <Link to={"/products"}>Products</Link>
          <Link to={"/products/:id"}>Cart</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/"}>Home</Link>
        </nav>
      </header>
    );
  }
  
  export default Nav;