
import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.section`
min-width: 375px;
padding: 25px; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;  
  
  button{
      background-color: #3C4954;
      width: 100%;
      border-radius: 12px;
      height: 50px;
      border: none;
      font-size: 15pt;
      margin-top: 40px;
      font-family: 'Roboto', sans-serif;
      transition: all 0.2ms;

      a{
        color: #FFFFFF;
        
      }
    &:hover{
      background-color: ${darken(0.06, '#3C4954')};      
    }  
    
  }

  @media only screen and (min-width: 768px){   
    button{
      width: 40%;
    }  
  }

  @media only screen and (min-width: 1024px){
    button{
      width: 40%;
    }
  }

  @media only screen and (min-width: 1440px){
    button{
      width: 30%;
    }
  }

  @media only screen and (min-width: 2560px){
    button{
      width: 20%;
    }
  }
  
`

export const Img = styled.div`
  
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    img:nth-child(2){
      position: absolute;
      margin-top: 140px;
    }
    /*& img:last-child{*/
    
`

export const Title = styled.div`
  color: #3C4954;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    margin-top: 175px;
    font-size: 32pt;
    margin-bottom: 16px;
    font-family: 'acumin-pro',sans-serif; 
  }
  p{
    font-size: 15px;
    line-height: 26px;
    text-align: center;
    font-family: 'Roboto';
    margin: 0 20px;
  }
`