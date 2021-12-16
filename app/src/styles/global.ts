import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #111;
  }
`

export default GlobalStyle;