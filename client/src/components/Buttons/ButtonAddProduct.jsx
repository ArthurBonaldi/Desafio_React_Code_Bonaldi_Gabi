import React from 'react'


import './ButtonAddProduct.css'

export function ButtonAddProduct() {
  return (
    <>
     <a className="btnAdd" href="#">
        <button className="btnAddProduct" type='submit'>+</button>
     </a>
    </>
  );
}