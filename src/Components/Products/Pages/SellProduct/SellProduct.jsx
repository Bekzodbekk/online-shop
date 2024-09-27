import React from 'react';
import "./sellProduct.scss";

const SellProduct = ({ toggleWindow }) => {

  const handleBackgroundClick = (e) => {
    // Agar bosilgan element `sell_product_container` bo'lmasa, oynani yopish
    if (e.target.classList.contains('sell_product')) {
      toggleWindow();
    }
  };

  return (
    <div className='sell_product' onClick={handleBackgroundClick}>
        <div className="sell_product_container" onClick={(e) => e.stopPropagation()}>
            <div className="info">
                <h1 className='name info_txt'>Name: Contlor</h1>
                <h1 className='color info_txt'>Rangi: <span className='color_box bg-danger'></span></h1>
                <h1 className='size info_txt'>Razmer: L</h1>
            </div>
            <div className="btns">
                <button className='btn btn-success'>Sotish</button>
                <button onClick={toggleWindow} className='btn btn-danger'>Bekor qilish</button> {/* Yopish funksiyasi */}
            </div>
        </div>
    </div>
  );
}

export default SellProduct;
