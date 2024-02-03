import { Link } from "react-router-dom";
import "../index.css"
import useShop from "../ShopContext";

const Header = () => {
  const {products} = useShop();
  return (
    <div className="menu">
      <Link to="/" className="logo">Reactivity App</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Carts">Cart</Link>
      </div>
      <Link to="/Carts"><span className="carts">{products.length}</span></Link>
    </div>
  )
}


export default Header;