import { useEffect, useState } from "react";
import "./shop.css";
import { Product } from "../../products";
import { Products } from "./Products";

export const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data));
  });

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Test online Shoping Cart</h1>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id}>
            <Products data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
