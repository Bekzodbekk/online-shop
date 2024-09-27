import React from 'react'
import "./debt.scss"
import DebtItem from './DebtItem/DebtItem'

const Debt = () => {
    return (
    <div className='debts'>
        <div className="search">
            <input type="text" className='form-control' placeholder='Clientning biror malumotini kiriting...'/>
        </div>
        <div className="debt_items">
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
        </div>
    </div>
  )
}

export default Debt