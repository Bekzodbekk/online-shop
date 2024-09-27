import React, { useState } from 'react';
import "./product_page.scss";
import AddCountProduct from '../AddCountProduct/AddCountProduct';
import SellProduct from '../SellProduct/SellProduct';
import AddDebt from '../AddDebt/AddDebt';

const ProductPage = () => {
    const [activeSize, setActiveSize] = useState("L");
    const [activeColor, setActiveColor] = useState("red");
    const [isAddCountWindowOpen, setIsAddCountWindowOpen] = useState(false); // Qo'shish oynasi
    const [isSellProductWindowOpen, setIsSellProductWindowOpen] = useState(false); // Sotish oynasi
    const [isAddDebtWindowOpen, setIsAddDebtWindowOpen] = useState(false); // Qarzga qo'shish oynasi

    const setSizeActiveHandle = (activeStatus) => {
        setActiveSize(activeStatus);
    };

    const setColorActiveHandle = (activeStatus) => {
        setActiveColor(activeStatus);
    };

    const toggleAddCountWindow = () => {
        setIsAddCountWindowOpen(!isAddCountWindowOpen); // Qo'shish oynasini boshqarish
    };

    const toggleSellProductWindow = () => {
        setIsSellProductWindowOpen(!isSellProductWindowOpen); // Sotish oynasini boshqarish
    };

    const toggleAddDebtWindow = () => {
        setIsAddDebtWindowOpen(!isAddDebtWindowOpen); // Qarzga qo'shish oynasini boshqarish
    };

    return (
        <div className='product_page'>
            <div className="product_container">

                <div className="top">
                    <div className="img">
                        <img src={require("../../../../Assets/bag.png")} alt="Mahsulot rasmi" />
                    </div>
                    <div className="info">
                        <h1 className='info_text name'>Nomi: <span>Contlor</span></h1>
                        <h1 className='info_text type'>Turi: <span>Darojni</span></h1>
                        <h1 className='info_text price'>Kelgan narxi: <span>110.000</span></h1>
                        <h1 className='info_text sell'>Sotilish narxi: <span>140.000</span></h1>
                        <h1 className='info_text count'>Soni: <span>5</span></h1>
                        <h1 className='info_text number'>Raqami: <span>Yo'q</span></h1>
                    </div>
                </div>
                <div className="params">
                    <div className="size">
                        <h1 onClick={() => setSizeActiveHandle("L")} className={activeSize === "L" ? "active box_size" : "box_size"}>L</h1>
                        <h1 onClick={() => setSizeActiveHandle("M")} className={activeSize === "M" ? "active box_size" : "box_size"}>M</h1>
                        <h1 onClick={() => setSizeActiveHandle("S")} className={activeSize === "S" ? "active box_size" : "box_size"}>S</h1>
                    </div>
                    <div className="colors">
                        <div onClick={() => setColorActiveHandle("red")} className={activeColor === "red" ? "active bg-danger color_box" : "bg-danger color_box"}></div>
                        <div onClick={() => setColorActiveHandle("green")} className={activeColor === "green" ? "active bg-success color_box" : "bg-success color_box"}></div>
                        <div onClick={() => setColorActiveHandle("blue")} className={activeColor === "blue" ? "active bg-info color_box" : "bg-info color_box"}></div>
                        <div onClick={() => setColorActiveHandle("purple")} className={activeColor === "purple" ? "active bg-primary color_box" : "bg-primary color_box"}></div>
                        <div onClick={() => setColorActiveHandle("gray")} className={activeColor === "gray" ? "active bg-secondary color_box" : "bg-secondary color_box"}></div>
                    </div>
                </div>
                <div className="bottom">
                    <button onClick={toggleAddDebtWindow} className='btn btn-outline-danger'>Qarzga qo'shish</button> {/* Qarzga qo'shish oynasini ochish */}
                    <button onClick={toggleSellProductWindow} className='btn btn-outline-success'>Sotish</button> {/* Sotish oynasini ochish */}
                    <button onClick={toggleAddCountWindow} className='btn btn-outline-primary'>Qo'shish</button> {/* Qo'shish oynasini ochish */}
                </div>

                {/* AddCountProduct komponenti uchun */}
                <AddCountProduct
                    isOpen={isAddCountWindowOpen}
                    toggleWindow={toggleAddCountWindow}
                />

                {/* SellProduct komponenti uchun */}
                {isSellProductWindowOpen && (
                    <SellProduct
                        toggleWindow={toggleSellProductWindow}
                    />
                )}

                {/* AddDebt komponenti uchun */}
                {isAddDebtWindowOpen && (
                    <AddDebt
                        toggleWindow={toggleAddDebtWindow}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductPage;
