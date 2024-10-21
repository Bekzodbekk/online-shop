import React from 'react'
import "./productFinished.scss"
import FinishProductItem from './FinishProductItem/FinishProductItem'

const ProductFinished = () => {
    const finishProductInfo = [
        {color: "green", L: 5, M: 3, S: 2},
        {color: "red", L: 2, M: 0, S: 3},
        {color: "yellow", L: 1, M: 1, S: 2},
        {color: "black", L: 4, M: 1, S: 6},
        {color: "blue", L: 5, M: 2, S: 3},
    ]
    return (
        <div className="finish_product_container">
            <div className="box">
                <div className="items">
                    <FinishProductItem colors_info={finishProductInfo}/>
                    <FinishProductItem colors_info={finishProductInfo}/>
                </div>
            </div>
        </div>
    )
}

export default ProductFinished