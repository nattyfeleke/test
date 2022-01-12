import { createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
}

body {
    font-family: sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: #feffff;
    color: #294868;
}
`