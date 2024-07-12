// import { useState } from "react";
import CartItem from "./cart-item";

function Cart() {
  // const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <div>Cart</div>
      <ul>
        {/* {cartItems.map((cartItem) => { */}
        {/*   return <CartItem />; */}
        {/* })} */}
        <CartItem item={{ name: "foo" }} />
      </ul>
    </>
  );
}

export default Cart;
