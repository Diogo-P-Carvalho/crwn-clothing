import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropdownStyles";

export default function CartDropdown() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate("/checkout");

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
}
