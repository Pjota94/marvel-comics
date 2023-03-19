import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body{
    background: #030305;
   
  }
  button{
    cursor: pointer;
  }
  
  ul ol li{
    list-style: none;
  }
  
  `;
