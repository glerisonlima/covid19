import React, {useState} from 'react';

import { 
  HeaderIcons, 
  HeaderTitle, 
  HeaderNav, 
  SelectedPais, 
  Nav,
  ImageFlag 
} from '../styles/styleCases';
import Link from 'next/link';
import SelectPais from '../components/SelectPais'

function components(props) {
  const [isSelected, setIsSelected] = useState(false);  
  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2016/03/31/20/41/countries-1295969_960_720.png');
  const [namePais, setNamePAis] = useState('WOR');
  const [clicado, setClicado] = useState('cases');

  let selection;

  if(isSelected) {
    selection = <SelectPais handle={handleClick}/>
  }else{
    selection = ''
  }

  function handleClick(e) {
    props.handle(e.currentTarget.dataset.id);
    setIsSelected(false);
    setNamePAis(e.currentTarget.dataset.id);
    let sigla;
    if(e.currentTarget.dataset.id === 'BRA'){
      sigla = 'BR';
    }else if(e.currentTarget.dataset.id === 'USA'){
      sigla = 'US';
    }else if(e.currentTarget.dataset.id === 'ITA'){
      sigla = 'IT';
    }else if(e.currentTarget.dataset.id === 'CHN'){
      sigla = 'CN';
    }
    setImage(`https://www.countryflags.io/${sigla}/flat/48.png`)

  }

  function handleClickNav(e){
    setClicado(e.currentTarget.dataset.id);
  }

  

  return (
    <>
    <HeaderIcons>
      <img src="/images/menu.png" alt="menu"/>
      <img src="/images/notification.png" alt="notification"/>
    </HeaderIcons>
    <HeaderTitle>
      <h1>COVID-19</h1>
      <SelectedPais>
        <ImageFlag>
          <img src={image} alt="flag"/>
        </ImageFlag>
        <p>{namePais}</p>
        <span onClick={() => setIsSelected(!isSelected)}>
          <img src="/images/sort-down.png" alt="sort-down"/>
        </span>
        { selection }        
      </SelectedPais>
    </HeaderTitle>
      <HeaderNav>
        <Link href="/cases"><Nav onClick={(e) => handleClickNav(e)} data-id="cases" isSelected={clicado == 'cases' ? true : false} ><a>Cases</a></Nav></Link>
        <Link href="/prevention"><Nav onClick={(e) => handleClickNav(e)} data-id="prevection" isSelected={clicado == 'prevection' ? true : false}><a>Prevention</a></Nav></Link>
        <Nav><a href="#">Hospitais</a></Nav>
      </HeaderNav>    
    </>
  )
}

export default components;