import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useShopCart } from "../../context/ShopContext";
import { useProducts } from "../../context/ProductsContext";

export const Cart = () => {
  const { products, loading, error } = useProducts();
  const { cartItems, getTotalCartAmount, checkout } = useShopCart();
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading cart...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {products.map((product) =>
          (cartItems[product.id] ?? 0) > 0 ? (
            <CartItem key={product.id} data={product} />
          ) : null
        )}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
