import React from 'react'
import { Card } from '../../components/Card/Card';
import ContainerCard from '../../components/Card/ContainerCard';
import Slider from '../../components/Slider/Slider'
import { PageContainer } from '../../GlobalStyle'
import './Home.css';


export function Home() {
  return (

    <PageContainer>

      {/* Carossel */}
      <Slider></Slider>
      
      {/* Produtos */}
      <ContainerCard></ContainerCard>
      
    </PageContainer>

  )
}