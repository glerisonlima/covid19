import React from 'react';

import { CardListagem } from '../styles/styleCases'

function CardListagemDados({dados}) {
  return (
    <CardListagem>
      <ul>
        <li>
          <span></span>
          <p>Active Cases</p>
          <p>{dados.confirmed.value}</p>
        </li>
        <li>
          <span></span>
          <p>Discharge</p>
          <p>{dados.recovered.value}</p>
        </li>
        <li>
          <span></span>
          <p>Deaths</p>
          <p>{dados.deaths.value}</p>
        </li>
      </ul>
    </CardListagem>
  );
}

export default CardListagemDados;