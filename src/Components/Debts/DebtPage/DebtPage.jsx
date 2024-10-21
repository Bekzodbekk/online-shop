import React from 'react'
import "./debtPage.scss"

const DebtPage = () => {
  return (
    <div className='debt_info'>
        <div className="debt_container">
            <div className="client_info">
                <div className="top">
                    <h1>Ismi: Bekzod</h1>
                    <h1>Familiya: Nematov</h1>
                    <h1>Telefon: +998 50 752-52-34</h1>
                    <h1>JSHSHIR: 123456789654</h1>
                </div>
                <div className="bottom">
                    <h1>Address: 1-5-21</h1>
                    <h1>Tanishi: Yo'q</h1>
                    <h1>Garov: pasport</h1>
                    <h1>Qarzni berish vaqti: 10.09.2024</h1>
                </div>
            </div>
            <div className="btns">
                <button className='btn btn-success'>Qarzni o'chirish</button>
            </div>
        </div>
    </div>
  )
}

export default DebtPage