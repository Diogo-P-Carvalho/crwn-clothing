import Button from "../button/Button";

import "./CartDropdown.scss";

export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Checkout</Button>
    </div>
  );
}
