import { Link } from 'react-router-dom'

import {
  HeaderBar,
  HeaderContent,
  LinkRestaurantes,
  CartButton
} from './styles'

import logoImg from '../../assets/images/logo.png'

const HeaderProfile = () => (
  <HeaderBar>
    <HeaderContent className="container">
      <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
      <Link to="/">
        <img src={logoImg} alt="Efood" />
      </Link>
      <CartButton>0 produto(s) no carrinho</CartButton>
    </HeaderContent>
  </HeaderBar>
)

export default HeaderProfile
