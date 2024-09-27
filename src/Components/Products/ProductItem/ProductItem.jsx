import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = () => {
    const navigate = useNavigate()

    const SendRouteNavigateHandle = () => {
        navigate("/products/products-info")
    }
    return (
        <div onClick={SendRouteNavigateHandle} className="product_item">
            <div className="img">
                <img src={require("../../../Assets/bag.png")} alt="" />
            </div>
            <div className="info">
                <div className="top">
                    <h1 className='name'>Contlor</h1>
                    <h1 className='type'>Darojni</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <h1>L: 110.000</h1>
                        <h1>M: 100.000</h1>
                        <h1>S: 90.000</h1>
                    </div>
                    <div className="right">
                        <h1>140.000</h1>
                        <h1>130.000</h1>
                        <h1>120.000</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductItem