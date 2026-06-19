import { Product } from "../../products";

interface ProductProps {
    data: Product;
  }

export const Products = (props : ProductProps) => {
    const { title, price, image } = props.data;
    return(
        <div className='product'>
            <img src={image} alt={title} />
            <div className='description'>
                <p><b>{title}</b></p>
                <p>${price}</p>
            </div>
            <button className='addToCartBttn'>Add to Cart</button>
        </div>
    )
}