import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


export const Navbar = () => {


    return (
    <div className={styles.navbar}>
        <nav>
            <ul>
                <li>< Link to='/'>Shop</Link></li>
                <li>
                    < Link to='/cart'>
                        <ShoppingCart size={32}/>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
    );
}