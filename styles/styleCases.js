import styled from 'styled-components';

export const Container = styled.section`
  min-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  @media only screen and (min-width: 768px){   
    width: 75%;
    margin: 0 auto;  
  }

  @media only screen and (min-width: 1024px){   
    width: 50%;
    margin: 0 auto;  
  }

  @media only screen and (min-width: 1400px){   
    width: 40%;
    margin: 0 auto;  
  }

`

export const HeaderIcons = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
`

export const HeaderTitle = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 25px 20px;

  h1{
    font-family: 'Roboto';
    font-size: 30px;
    color: #3C4954;
    margin: 0;
    font-weight: 500;
  }
`

export const SelectedPais = styled.div`
  border: 2px solid #F4F4F6;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 110px;
  height: 40px;
  padding: 0 10px;  

  p{
    margin: 0;
    font-family: 'Roboto';
    font-size: 14px;
    color: #3C4954;
  }
`

export const ImageFlag = styled.span`
  border-radius: 50px;
  height: 30px;
  overflow: hidden;
  width: 30px;
  border: 1px solid #F4F4F6;
  
  img{
    width: 45px;
    height: 45px;
    margin: -8px 0px 0px -8px;
  }
` 

export const HeaderNav = styled.div`
  width: 100%; 
  display: flex;
  justify-content: space-around;
  align-items: center;  
  box-shadow: 0px 6px 10px #A5A5A538;

  a{
    margin: 0;
    width: 100%;
    text-decoration: none;
    color: #3C4954;
    font-size: 15px;
    font-family: 'Roboto';
  }

`

export const Nav = styled.span`
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid #F4F4F6;
  width: 100%;
  border-bottom: ${props => props.isSelected ? '1px solid #665EFF' : 'none'} ;
`

export const CardGrafico = styled.div`
  width: 95%;
  margin: 16px;
  border-radius: 4px;
  height: 300px;
  box-shadow: 2px 2px 8px 10px #455B6314;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  div{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
 
`

export const TotaisGrafico = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  z-index: 0;

  span{
    font-family: 'Roboto';
    font-weight: 500;
  }

  span:nth-child(1){
    font-size: 35px;
    color: #3C4954;
  }
  span:nth-child(2){
    font-size: 18px;
    color: #78849E;
  }
`

export const PorcentGrafico = styled.div`  
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: #3C4954;

  p:nth-child(1){
    position: absolute;
    z-index: 2;
    margin: -115px 0px 0px -74px;
  }

  p:nth-child(2){
    position: absolute;
    z-index: 3;
    margin: 85px 0px 0px 122px;
  }

  p:nth-child(3){
    position: absolute;
    z-index: 4;
    margin: 53px 0px 0px -136px;
  }
`

export const CardListagem = styled.div`
  width: 95%;
  margin: 16px;
  border-radius: 4px;
  height: 180px;
  box-shadow: 2px 2px 8px 10px #455B6314;
  display: flex;
  flex: 1;
  flex-direction: column;
  ul{
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
  }

  li{
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #455B6314;
    font-family: 'Roboto';
    color: #3C4954;
    justify-content: start;
  }

  span{ 
    background-color: #FFC259;
    width: 10px;
    height: 10px;
    border-radius: 3px;
    margin-left: 25px;
  }
  li:nth-child(2) span{
    background-color: #55E13A;
  }
  li:nth-child(3) span{
    background-color: #FF5959;
  }

  p{
    margin-left: 30px;
  }

  p:nth-child(3){
    margin: 0 auto;
    margin-right: 25px;
  }
`

export const CardSexo = styled.div`
  width: 95%;
  margin: 16px 16px 0px 16px;
  border-radius: 4px;
  height: 80px;
  box-shadow: 2px 2px 8px 10px #455B6314;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardSexoItem = styled.div`
  padding: 0 35px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  border-bottom: ${props => props.isSelected ? '3px solid #555869' : 'none'} ;

  span{
    font-family: 'Roboto';
    font-size: 20px;
    color: #3C4954;
  }
  p{
    color: #748A9D;
    font-family: 'Roboto';
    font-size: 14px;
    margin-top: 5px;
  }
`

export const PrevetionItens = styled.div`
  width: 80%;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px;
  }

  div:nth-child(1){
    margin-top: 50px;
    padding-bottom: 20px;
    border-bottom: 1px solid #F4F4F6FD;
  }

  div:nth-child(2){
    span:nth-child(2){
      width: 70%;
    }
  }

  span p{
    font-family: 'Roboto';
    font-size: 13px;
    color: #3C4954;
  }
`

export const TextTitleInfo = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #78849E;
  font-weight: 500;
  text-align: left;
  width: 100%;
  margin: 20px 0 20px 20px;
`

export const CardSymptoms = styled.div`
  width: 95%;
  border-radius: 4px;
  height: 150px;
  box-shadow: 2px 2px 8px 10px #455B6314;
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 15px;

  img{
    height: 100px;
    margin: 0 0 0 15px;
  }

  div{
    text-align: left;
    margin: 25px 10px 25px 15px;
  }
  h2{
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 16px;
    color: #454F63;
  }
  p{
    margin-top: 10px;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 12px;
    color: #78849E;
  }
`

export const CardSelectedPais = styled.div`
  background-color: #FFFFFF;
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  margin: 64px 0 0 0;
  z-index: 5;

  li{
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 16px;
    color: #454F63;
    margin-bottom: 2px;
    border-bottom: 1px solid #F4F4F6;
    width: 100%; 
    cursor: pointer;
  }
`

