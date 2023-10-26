import React from 'react'

function ProductList({products, addToCart}) {
  return (
    <div>
        <h2>PRODUCTS LIST</h2>
        <ul>
            {
                products.map((product) => (
                    <li key = {product.id}>
                        <span>{product.name}</span>
                        <span> - Rs.{product.price}</span>
                        <button onClick = {() => addToCart(product)}>Add to cart</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ProductList