import React from 'react'

const DashboardInfoItem = () => {
  return (
    <div className="item">
            <div className="img">
              <img src={require("../../../../Assets/bag.png")} alt="" />
            </div>
            <div className="name_color">
              <h4 className="name">Cantlor</h4>
              <div className="size_color">
                <h4 className="L">L 
                <span className='bg-success'></span>
                <span className='bg-danger'></span>
                  </h4>
                <h4 className="M">M <span className='green'></span></h4>
                <h4 className="S">S <span className='yellow'></span></h4>
              </div>
            </div>
            <div className="body_price_cont">
              <h4 className='body_price_title'>Tan narxi</h4>
              <h4 className='body_price_L'>110.000</h4>
              <h4 className='body_price_M'>110.000</h4>
              <h4 className='body_price_S'>110.000</h4>
            </div>
            <div className="sold_price_cont">
              <h4 className='sold_price_title'>Sotish narxi</h4>
              <h4 className='sold_price_L'>140.000</h4>
              <h4 className='sold_price_M'>140.000</h4>
              <h4 className='sold_price_S'>140.000</h4>
            </div>
            <div className="total_price_cont">
              <h4 className="total_price_title">Jami</h4>
              <h4 className="total_price">1.200.000</h4>
            </div>

          </div>
  )
}

export default DashboardInfoItem