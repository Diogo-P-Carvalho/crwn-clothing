import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import "./CartDropdown.scss";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
}
