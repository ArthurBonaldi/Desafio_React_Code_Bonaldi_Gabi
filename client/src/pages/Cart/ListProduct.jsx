import React from 'react';
import "./ListProduct.css"

export function ListProduct() {
  return (
   <>
      <div className="header-list-cart">
       <div style={{textAlign: 'center'}} className="cart-item">Produto</div>
       <div className="cart-item">Nome</div>
       <div className="cart-item">Preço</div>
       </div>
       <div className="items-list-cart">
        <div className="cart-item"><img src="https://m.media-amazon.com/images/I/81W9dIVSmuL._AC_SX695_.jpg"
        width={100} height={150} />
        </div>
        <div className="cart-item">Nome do produto</div>
        <div className="cart-item">R$</div>
        </div>
      <div className="footer-list-cart"></div>
    </>
  );
}