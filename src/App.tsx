import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes/routes'
import { store } from './store'
import { GlobalStyle } from './styles'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Rotas />
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
