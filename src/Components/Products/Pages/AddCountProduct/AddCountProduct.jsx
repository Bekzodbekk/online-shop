import React from 'react';

const AddCountProduct = ({ isOpen, toggleWindow }) => { // Prop orqali oynani boshqarish
    const handleOutsideClick = (e) => {
        if (e.target.className === "addProductCount") {
            toggleWindow();
        }
    };

    return (
        <>
            {isOpen && (
                <div onClick={handleOutsideClick} className="addProductCount">
                    <div className="add_count_product_container">
                        <h1>Nechta Qo'shmoqchisiz ?</h1>
                        <div className="input-group form_div">
                            <input className='form-control' type="number" placeholder="Soni" />
                            <button className='btn btn-primary'>Qo'shish</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddCountProduct;
