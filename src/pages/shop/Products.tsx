import { React } from "react";
import { Product } from "../../products";

interface ProductProps {
    data: Product;
  }

export const Products = (props : ProductProps) => {
    const { productName, price, productImage } = props.data;
    return(
        <div className='product'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <button className='addToCartBttn'>Add to Cart</button>
        </div>
    )
}