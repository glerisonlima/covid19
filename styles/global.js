import React from 'react'
import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`    

    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body{
      font: 14px, Roboto, sans-serif;
      margin: 0;
    }

    button{
      cursor: pointer;
    }

    a{
      text-decoration: none;
    }

    ul{
      list-style-type: none;
    }
  `