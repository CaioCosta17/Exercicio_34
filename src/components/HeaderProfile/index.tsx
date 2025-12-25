import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store/reducers'

import logoImg from '../../assets/images/logo.png'

import * as S from './styles'

const HeaderProfile = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <S.HeaderBar>
      <S.HeaderContent className="container">
        <S.LinkRestaurantes href="/">Restaurantes</S.LinkRestaurantes>
        <Link to="/">
          <img src={logoImg} alt="Efood" />
        </Link>
        <S.CartButton>{items.length} produto(s) no carrinho</S.CartButton>
      </S.HeaderContent>
    </S.HeaderBar>
  )
}

export default HeaderProfile
