import { Product } from "../../products";

interface ProductProps {
    data: Product;
  }

export const ProductView = (props : ProductProps) => {
    const { title, price, image } = props.data;
    return(
        <div className='flex flex-col'>
            <img src={image} alt={title} className="h-48 w-auto object-contain"/>
            <div className='description'>
                <p><b>{title}</b></p>
                <p>${price}</p>
            </div>
            <button className='addToCartBttn'>Add to Cart</button>
        </div>
    )
}