import React from 'react'
import "./dashboardinfo.scss"
import DashboardInfoItem from './DashboardInfoItem/DashboardInfoItem'

const DashboardInfo = () => {
  return (
    <div className='dashboard_info'>
      <div className="box">
        <div className="title_info">
          <h1>Jami savdo: 1.231.000</h1>
          <h1>Tan narxi: 570.000</h1>
          <h1>Foyda: 620.000</h1>
          <h1>Soni: 12</h1>
        </div>
        <div className="items">
          <DashboardInfoItem />
          <DashboardInfoItem />
          <DashboardInfoItem />
          <DashboardInfoItem />
          <DashboardInfoItem />
        </div>
      </div>
    </div>
  )
}

export default DashboardInfo