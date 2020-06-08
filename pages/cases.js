import React,{useState} from 'react'
import {
  Container, 
  CardSexo,
  CardSexoItem,  
} from '../styles/styleCases'
import Head from 'next/head'
import GlobalStyle from '../styles/global';
import HeaderCases from '../components/HeaderCases';
import GraficoCases from '../components/GraficoCases';
import CardListagem from '../components/CardListagem';

import axios from 'axios';
 

const Cases = ({world}) => {
  const [dataWorld, setDataWorld] = useState(world);
  

  async function byCountry(country){
    const response = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    return setDataWorld(response.data);
    
  }  
  
  return (
    <div> 
    <Head>
      <title>Covid-19</title>      
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" /> 
      <link rel="stylesheet" href="https://use.typekit.net/kgk1hsj.css"></link>
    </Head> 
    <GlobalStyle />
    <Container>   
        <HeaderCases handle={byCountry}/>
        <GraficoCases dados={dataWorld}/>
        <CardListagem dados={dataWorld} />
        <CardSexo>
            <CardSexoItem>
              <span>9000</span>
              <p>Male</p>
            </CardSexoItem>
            <CardSexoItem isSelected={true}>
              <span>55</span>
              <p>Female</p>
            </CardSexoItem>
            <CardSexoItem>
              <span>200</span>
              <p>Children</p>
            </CardSexoItem>
        </CardSexo>
        
    </Container>
    </div>
  )
}
          



  Cases.getInitialProps = async () => {
    const response = await axios.get(
      'https://covid19.mathdro.id/api'
    );
    return {world: response.data};
  }

export default Cases;