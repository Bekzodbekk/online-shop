import React from 'react'
import "./product.scss"
import ProductItem from './ProductItem/ProductItem'

const Product = () => {
  return (
    <div className='product_container'>
        <div className="search">
            <input className='form-control search_input' placeholder='Malumot yozing...' type="text" />
            <button className='btn btn-success'>Add Product</button>
        </div>
        <div className="product_items">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    </div>
  )
}

export default Product