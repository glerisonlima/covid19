import React from 'react'
import { Container, Title, Img } from '../styles/styleIndex'
import Link from 'next/link'
import Head from 'next/head'


export default function Home() {  
  return (
    <div>
    <Head>
      <title>Covid-19</title>      
      <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet" /> 
      <link rel="stylesheet" href="https://use.typekit.net/kgk1hsj.css"></link>
    </Head> 
    <Container>  
        <Img>       
          <img src="/images/background.png" alt="background da pagina"/>
          <img src="/images/logo-index.png" alt="background da pagina"/>
        </Img>
        <Title>
          <h1>COVID-19</h1>
          <p>Protect yourself and others around you by knowing the facts and taking appropriate.</p>
        </Title>
        <Link href="/cases">
          <button><a>GET STARTERD</a></button>
        </Link>
    </Container> 
    </div>
  )
}
