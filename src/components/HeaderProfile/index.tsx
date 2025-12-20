import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import {
  HeaderBar,
  HeaderContent,
  LinkRestaurantes,
  CartButton
} from './styles'

import logoImg from '../../assets/images/logo.png'

const HeaderProfile = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <HeaderBar>
      <HeaderContent className="container">
        <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
        <Link to="/">
          <img src={logoImg} alt="Efood" />
        </Link>
        <CartButton>{items.length} produto(s) no carrinho</CartButton>
      </HeaderContent>
    </HeaderBar>
  )
}

export default HeaderProfile
