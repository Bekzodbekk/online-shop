import React from 'react'
import "./dashboard.scss"
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()

    const SendRouteNavigateHandle = () =>{
        navigate("/dashboard/dashboard-info")
    }

    return (
        <div className='dashboard' onClick={SendRouteNavigateHandle}>
            <div className="box">
                <h1 className='title'>Bugungi savdo</h1>
                <div className="items">
                    <div className="total">
                        <h1>1.312.000</h1>
                        <h3>To'liq savdo</h3>
                    </div>
                    <div className="solds">
                        <h1>12</h1>
                        <h3>Sotildi</h3>
                    </div>
                    <div className="body_price">
                        <h1>570.000</h1>
                        <h3>Tan narxi</h3>
                    </div>
                    <div className="target">
                        <h1>620.000</h1>
                        <h3>Foyda</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard