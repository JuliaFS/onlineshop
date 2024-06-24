//if import from folder
import product1 from './assets/product1.png';

export interface Product {
        id: number,
        productName: string,
        price: number,
        productImage: string
    }
    // Add other products as needed


export const PRODUCTS: Product[] = [
    {
        id: 1,
        productName: 'Product1',
        price: 999.0,
        productImage: product1
    },
    {
        id: 2,
        productName: 'Product2',
        price: 777.23,
        productImage: product1
    },
    {
        id: 3,
        productName: 'Product3',
        price: 55,
        productImage: product1
    },
    {
        id: 4,
        productName: 'Product4',
        price: 52.30,
        productImage: product1
    },
    {
        id: 5,
        productName: 'Product5',
        price: 22,
        productImage: product1
    },
    {
        id: 6,
        productName: 'Product6',
        price: 54,
        productImage: product1
    },
    {
        id: 7,
        productName: 'Product7',
        price: 22,
        productImage: product1
    },
    {
        id: 8,
        productName: 'Product8',
        price: 77.23,
        productImage: product1
    }
]