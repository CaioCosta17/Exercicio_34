import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '../../store/reducers'
import { open } from '../../store/reducers/cartSlice'

import logoImg from '../../assets/images/logo.png'

import * as S from './styles'

const HeaderProfile = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderContent className="container">
        <S.LinkRestaurantes href="/">Restaurantes</S.LinkRestaurantes>
        <Link to="/">
          <img src={logoImg} alt="Efood" />
        </Link>
        <S.CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </S.HeaderContent>
    </S.HeaderBar>
  )
}

export default HeaderProfile
