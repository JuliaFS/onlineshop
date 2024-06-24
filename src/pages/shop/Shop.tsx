import { PRODUCTS } from '../../products';
import { Products } from './Products';
import './shop.css';

export const Shop = () => {
    return(
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Test online Shoping Cart</h1>
            </div>
            <div className='products'>
                { PRODUCTS.map((product) => (
                    <div key={product.id}>
                        <Products data={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}