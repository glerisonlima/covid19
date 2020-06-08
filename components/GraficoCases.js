import React from 'react';
import {Doughnut} from 'react-chartjs-2'
import NumberFormat from 'react-number-format';
import {
PorcentGrafico,
TotaisGrafico,    
CardGrafico,
} from '../styles/styleCases';
import axios from 'axios';


export default function GraficoCases(props){
  const { dados } = props;
  const data = {
    datasets: [{
      data: [JSON.stringify(dados.confirmed.value)
            ,JSON.stringify(dados.deaths.value)            
            ,JSON.stringify(dados.recovered.value)],
      backgroundColor: [
      '#FFC259',
      '#FF5959',
      '#55E13A'
      ],

    }],
  }; 

  function percent(valor){
    let soma = JSON.stringify(dados.confirmed.value + dados.deaths.value + dados.recovered.value);
    let percent = (valor * 100 / soma).toFixed(0)+'%';

    return percent;
  }

  //props.dados.world.confirmed.value
  return (
    <CardGrafico>
    <div>   
      <Doughnut 
        data={data}
        height={250}
        width={250}          
        options={{
          responsive: false,
          cutoutPercentage: 75,
          animation: {animateScale: true},
        }} 
      />
      <TotaisGrafico>
        <span><NumberFormat value={JSON.stringify(dados.confirmed.value)} displayType={'text'} format="#.###.###" /></span>
        <span>Total Cases</span>
      </TotaisGrafico>
      <PorcentGrafico>
        <p>{percent(JSON.stringify(dados.recovered.value))}</p>
        <p>{percent(JSON.stringify(dados.confirmed.value))}</p>
        <p>{percent(JSON.stringify(dados.deaths.value))}</p>
      </PorcentGrafico>
    </div>
    </CardGrafico>
  );
 
}

export async function getStaticProps(){
  const response = await axios.get(
    'https://covid19.mathdro.id/api'
  );
    const dados = response.data;
  return {
    props: {
      dados
    },
  }
}
