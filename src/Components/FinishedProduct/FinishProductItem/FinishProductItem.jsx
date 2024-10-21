import React from 'react'
import FinishProductColors from './FinishProductColors/FinishProductColors'

const FinishProductItem = ({ colors_info }) => {
    return (
        <div className="item">
            <div className="img">
                <img src={require("../../../Assets/bag.png")} alt="" />
            </div>
            <div className="sizes">
                <h4>L</h4>
                <h4>M</h4>
                <h4>S</h4>
            </div>
            <div className="colors_and_counts">
                {
                    colors_info.map((element, idx) => (
                        <FinishProductColors key={idx} dict={element} />
                    ))
                }
            </div>
        </div>
    )
}

export default FinishProductItem
