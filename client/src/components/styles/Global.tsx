import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
}

body {
    font-family: sans-serif;
    font-size: 1.2rem;
    line-height: 1.4;
    background-color: #feffff;
    color: #294868;
}

@media screen and (max-width: 460px) {
    html {
       
        font-size: 60%;
    }
    
    body {
        
        font-size: 1rem;
       
    }
  }

`;
