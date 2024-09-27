import React, { useState } from 'react'
import "./sidebar.scss"
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const activeHandle = (activeStatus) =>{
        setActive(activeStatus)
    }
    const [active, setActive] = useState("dashboard")
    return (
        <div className='sidebar'>
            <ul className="menus">
                <li className={active === "dashboard" ? "active" : ""} onClick={() => activeHandle("dashboard")}>
                    <Link aria-disabled={true} to="/">
                        <span><i className="fa-solid fa-chart-pie"></i></span>
                        Dashboard
                    </Link>
                </li>
                <li className={active === "bags" ? "active" : ""} onClick={() => activeHandle("bags")}>
                    <Link to="/products">
                        <span><i className="fa-solid fa-bag-shopping"></i></span>
                        Products
                    </Link>
                </li>
                <li className={active === "debts" ? "active" : ""} onClick={() => activeHandle("debts")}>
                    <Link to="/debts">
                        <span><i className="fa-solid fa-book-open"></i></span>
                        Debts
                    </Link>
                </li>
                <li className={active === "finished" ? "active" : ""} onClick={() => activeHandle("finished")}>
                    <Link aria-disabled={true} to="/">
                        <span><i className="fa-solid fa-book-open"></i></span>
                        Finished
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar