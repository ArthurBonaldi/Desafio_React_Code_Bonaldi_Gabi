import React from 'react'
import { PageContainer } from '../../GlobalStyle';
import { FormCadProduto } from '../../components/Forms/FormCadProduto';

export function NewProduct() {
  return (
    <PageContainer>
      <h1>Cadastrar Produto</h1>
      <FormCadProduto></FormCadProduto>
    </PageContainer>
  );
}