export const colors = {
  primaryRed: '#E66767',
  lightBg: 'FFEBD9',
  white: '#FFFFFF',
  textGray: '#4B4B4B',
  darkText: '#101010',
  starYellow: '#FFB800'
}

export const GlobalStyle = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.lightBg};
    color: ${colors.textGray};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }
`
