import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .margin{
        width: 80%;
        margin: 0 auto;
    }


    
`

export const theme = {
    colors: {
        background: '#414141',
        write: '#CCCCCC',
        writeDark: '#8C8C8C',
        backgroundDark: '#333333',
        pokeball: '#DD2C00',
        backgroundPoke: '#4D4D4D'

    }
    
}