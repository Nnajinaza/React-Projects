import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav>
        <Link to={"/product"}>Products</Link>
      </nav>
    );
  }
  
  export default Nav;