import React from 'react'
import { ButtonAddProduct } from '../../components/Buttons/ButtonAddProduct';
import ContainerCard from '../../components/Card/ContainerCard';
import { ProductsContainer } from './style'


export function Products() {
  return (
    <>
      {/* <ButtonAddProduct></ButtonAddProduct> */}
      <ProductsContainer>
        <input
          type="text"
          placeholder="Buscar produto pelo nome..."
        />
        <div id="productsContainer">
          {/* INSERIR OS PRODUTOS AQUI */}
        </div>
      </ProductsContainer>

      <ContainerCard></ContainerCard>
    </>
  );
}