import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/cartSlice'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acumulador, item) => {
      return acumulador + item.preco
    }, 0)
  }

  if (!isOpen) return null

  return (
    <S.CartContainer>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco.toFixed(2).replace('.', ',')}</p>
              </div>
              <button onClick={() => dispatch(remove(item.id))} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.TotalContainer>
          <p>Valor total</p>
          <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
        </S.TotalContainer>
        <S.ButtonContainer>Continuar com a entrega</S.ButtonContainer>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
