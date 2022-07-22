import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* color: ${props => (props.darkMode ? 'white' : 'black')}; */
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`