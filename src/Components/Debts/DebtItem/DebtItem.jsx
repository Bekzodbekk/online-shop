import React from 'react'
import { useNavigate } from 'react-router-dom'

const DebtItem = () => {
    const navigate = useNavigate()

    const SendNavigateRouteHandle = () => {
        navigate("/debts/debt-info")
    }
    return (
        <div onClick={SendNavigateRouteHandle} className="debt_item">
            <div className="top">
                <h1 className='name'>Bekzod</h1>
                <h1 className='price'>190.000</h1>
            </div>
            <div className="bottom">
                <h1 className="phone">+998 93 310-52-34</h1>
                <h1 className="phone">1-5-21</h1>
            </div>
        </div>
    )
}

export default DebtItem