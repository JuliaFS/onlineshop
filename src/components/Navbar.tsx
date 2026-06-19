import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useShopCart } from "../context/ShopContext";

export const Navbar = () => {
  const { getTotalItems } = useShopCart();

  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart" className="relative">
              <p className="rounded-full px-2 py-1 border absolute -top-3 -right-3 text-xs z-20 bg-green-300">{getTotalItems()}</p>
              <ShoppingCart size={32} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
