import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes/routes'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { store } from './store/reducers'

import { GlobalStyle } from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <div style={{ flex: 1 }}>
          <Rotas />
        </div>
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
