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
    <div className="flex items-center gap-4 m-2">
  <img
    src={image}
    alt={title}
    className="h-20 w-20 object-contain"
  />

  <div className="flex flex-col flex-1">
    <p>
      <b>{title}</b>
    </p>

    <p>Price: ${price}</p>
  </div>

  <div className="flex items-center justify-center border">
    <button
      className="bg-gray-200 w-8 h-8"
      onClick={() => removeFromCart(id)}
    >
      -
    </button>

    <input
      type="number"
      min="0"
      value={cartItems[id] ?? 0}
      onChange={(e) =>
        updateCartItemCount(Number(e.target.value), id)
      }
      className="w-12 text-center"
    />

    <button
      className="bg-gray-200 h-8 w-8"
      onClick={() => addToCart(id)}
    >
      +
    </button>
  </div>
</div>
  );
};
