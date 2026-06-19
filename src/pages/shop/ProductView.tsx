import { useShopCart } from "../../context/ShopContext";
import { Product } from "../../products";

interface ProductProps {
  data: Product;
}

export const ProductView = (props: ProductProps) => {
  const { id, title, price, image } = props.data;
  const { addToCart } = useShopCart();

  return (
    <div className="flex flex-col">
      <img src={image} alt={title} className="h-48 w-auto object-contain" />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
    </div>
  );
};
