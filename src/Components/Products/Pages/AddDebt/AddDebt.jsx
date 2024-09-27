import React from 'react';
import "./addDebt.scss";

const AddDebt = ({ toggleWindow }) => {
  return (
    <div className='add_debt' onClick={toggleWindow}> {/* Fon bosilganda yopish uchun */}
        <div className="add_debt_container" onClick={(e) => e.stopPropagation()}> {/* Ichki elementlarga bosilganda yopilmasin */}
            <input className='form-control' type="text" placeholder='Ism' />
            <input className='form-control' type="text" placeholder='Familiya' />
            <input className='form-control' type="text" placeholder='Telefon raqam' />
            <input className='form-control' type="text" placeholder='JSHSHIR' />
            <input className='form-control' type="text" placeholder='Address' />
            <input className='form-control' type="text" placeholder='Tanishlari' />
            <input className='form-control' type="text" placeholder='Garovga qoldiriladigan narsa ...' />
            <input className='form-control' type="date" placeholder='Kelish vaqti' />
            <div className="btns">
                <button className='btn btn-success'>Qarzga qo'shish</button>
                <button className='btn btn-danger' onClick={toggleWindow}>Bekor qilish</button> {/* Bekor qilish tugmasi */}
            </div>
        </div>
    </div>
  )
}

export default AddDebt;
