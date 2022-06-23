import React from 'react'
import { FormCadMarca } from '../../components/Forms/FormCadMarca';
import { PageContainer } from '../../GlobalStyle';

export function NewBrand() {
  return (
    <PageContainer>
      <FormCadMarca></FormCadMarca>
    </PageContainer>
  );
}