import { CartItemContainer, ItemDetails } from "./CartItemStyles";

export default function CartItem({ item }) {
  const { name, imageUrl, price, quantity } = item;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}
