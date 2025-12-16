import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  white: '#FFFFFF',
  background: '#FFF8F2',
  footerHeaderBg: '#FFEBD9',
  yellow: '#FFB930'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: #FFF8F2;
    color: #E66767;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
