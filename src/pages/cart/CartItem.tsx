import { useShopCart } from "../../context/ShopContext";
import { Product } from "../../products";

interface ShopProviderProps {
  data: Product;
}

export const CartItem = (props: ShopProviderProps) => {
  const { id, title, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useShopCart();

  return (
    <div className="cartItem">
      <img src={image} alt={title} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            type="number"
            min="0"
            value={cartItems[id] ?? 0}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
