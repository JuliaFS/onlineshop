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
    <div className="w-1/3 m-auto p-4 flex flex-col items-center">
      <div>
        <h3 className="text-3xl font-bold text-center">Your Cart Items</h3>
      </div>
      <div className="flex flex-col">
        {products.map((product) =>
          (cartItems[product.id] ?? 0) > 0 ? (
            <CartItem key={product.id} data={product} />
          ) : null,
        )}
      </div>

      {totalAmount > 0 ? (
        <div className="flex flex-col items-end w-full">
          <p className="my-6">Subtotal: ${totalAmount}</p>
          <div className="flex gap-4">
            <button
              className="p-2 rounded-sm bg-green-300 hover:bg-green-400"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
              className="p-2 rounded-sm bg-green-300 hover:bg-green-400"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h3 className="pt-5">Your Shopping Cart is Empty</h3>
      )}
    </div>
  );
};
