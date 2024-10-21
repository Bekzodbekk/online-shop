import React from 'react'

const FinishProductColors = ({dict}) => {
    console.log(dict);
    
    return (
        <div className="colors">
            <div style={{"background": dict["color"]}} className="color"></div>
            <h4>{dict["L"]}</h4>
            <h4>{dict["M"]}</h4>
            <h4>{dict["S"]}</h4>
        </div>
    )
}

export default FinishProductColors