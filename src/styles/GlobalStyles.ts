import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #1b1f23; 
    color: #c9d1d9;
  }

  h1, h2, h3 {
    color: #58a6ff; /* Svetloplava za naslove */
    font-weight: bold;
  }

  a {
    color: #9ecbff;
    text-decoration: none;
  }

  button {
    background-color: #238636; 
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #2ea043; 
    }
  }
`;
