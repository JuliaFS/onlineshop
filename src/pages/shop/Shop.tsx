import "./shop.css";
import { ProductView } from "./ProductView";
import { useProducts } from "../../context/ProductsContext";

export const Shop = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>`Error: ${error}`</p>;
  }

  return (
    <div className="shop">
      <div className="shopTitle">
        <h3 className="text-center">Test online Shoping Cart</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
        {products.map((product) => (
          <div key={product.id}>
            <ProductView data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
