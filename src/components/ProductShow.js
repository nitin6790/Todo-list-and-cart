import React, {useState} from 'react'
import ProductList from './ProductList'
const ProductShow = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    const products = [
        { id: 1, name: 'Mobile', price: 17999.99 },
        { id: 2, name: 'Television', price: 59994.99 } ,
        { id: 3, name: 'Air Conditioner', price: 39999.99 },
        { id: 4, name: 'Desktop', price: 29999.99 },
        { id: 5, name: 'refridgereator', price: 129999.99 },


    ];
    return(
        <div>
            <h1>SHOPPING CART</h1>
            <ProductList products={products} addToCart={addToCart} />
            <h2>Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key = {item.id}>
                        {item.name} - Rs.{item.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductShow