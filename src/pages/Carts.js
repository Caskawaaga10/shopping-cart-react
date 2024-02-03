import CartProducts from "../components/CartProducts";
import Payment from "../components/Payment";

const Carts = () => {
  return(
    <div className="cart-container">
      <CartProducts/>
      <Payment/>
    </div>
  )
}


export default Carts;