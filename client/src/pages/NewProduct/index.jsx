import React from 'react'
import { PageContainer } from '../../GlobalStyle';
import { FormCadProduto } from '../../components/Forms/FormCadProduto';

export function NewProduct() {
  return (
    <PageContainer>
     
      <FormCadProduto></FormCadProduto>
    </PageContainer>
  );
}