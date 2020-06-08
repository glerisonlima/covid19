import React,{useState} from 'react'
import {
  Container,
  PrevetionItens,
  TextTitleInfo,
  CardSymptoms
} from '../styles/styleCases'
import Head from 'next/head'
import GlobalStyle from '../styles/global';
import HeaderCases from '../components/HeaderCases';

export default function Cases(){

  const [isSelected, setIsSelected] = useState(false);

  return (
  <div> 
  <Head>
    <title>Covid-19</title>      
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" /> 
    <link rel="stylesheet" href="https://use.typekit.net/kgk1hsj.css"></link>
  </Head> 
  <GlobalStyle />
  <Container>    
      <HeaderCases /> 
      <PrevetionItens>
        <div>
          <span>
            <img src="/images/1.png" alt="alcool gel"/>
            <p>Use Sanitizer</p>
          </span>
          <span>
            <img src="/images/2.png" alt="alcool gel"/>
            <p>Stay Isolated</p>
          </span>  
          <span>
            <img src="/images/3.png" alt="alcool gel"/>
            <p>Wear Mask</p>
          </span>
        </div>
        <div>
          <span>
            <img src="/images/4.png" alt="alcool gel"/>
            <p>Maintain Distance</p>
          </span>
          <span>
            <img src="/images/5.png" alt="alcool gel"/>
            <p>Health Chekup</p>
          </span>
          <span>
            <img src="/images/6.png" alt="alcool gel"/>
            <p>Follow Govt Rules</p>
          </span>
        </div>  
      </PrevetionItens>
      <TextTitleInfo>Symptoms</TextTitleInfo> 
      <CardSymptoms>
        <img src="/images/Grupo1.png" alt="grupo 1"/>
        <div>
          <h2>Dry cough</h2>
          <p>The cough to look out for is a new, continuous cough. This means coughing a lot for more than an hour, or having three or more coughing episodes in 24 hours. If you usually have a cough, it may be worse than usual.</p>
        </div>  
      </CardSymptoms>
      <CardSymptoms>
        <div>
          <h2>Fever</h2>
          <p>You have a fever if your temperature is above 37.8C. This can make you feel warm, cold or shivery.</p>
        </div>  
        <img src="/images/Grupo2.png" alt="grupo 2"/>
      </CardSymptoms>      
  </Container>
  </div>
  )
}