import React from 'react';
import { CardSelectedPais } from '../styles/styleCases'

// import { Container } from './styles';


function SelectPais(props) {
  return (
    <CardSelectedPais>
      <ul>
        <li onClick={(e) => props.handle(e)} data-id="BRA">Brasil</li>
        <li onClick={(e) => props.handle(e)} data-id="USA">EUA</li>
        <li onClick={(e) => props.handle(e)} data-id="ITA">Itália</li>
        <li onClick={(e) => props.handle(e)} data-id="CHN">China</li>
      </ul>
    </CardSelectedPais>
  );
}

export default SelectPais;