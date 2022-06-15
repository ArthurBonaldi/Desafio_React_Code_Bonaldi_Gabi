import React from 'react'
import { PageContainer } from '../../GlobalStyle';
import { ListProduct } from './ListProduct';

export function Cart() {
  return (
    <PageContainer>
      <ListProduct></ListProduct>
      <ListProduct></ListProduct>
    </PageContainer>
  );
}