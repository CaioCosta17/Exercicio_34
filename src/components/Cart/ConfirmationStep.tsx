import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store/reducers'
import { clearCart, close } from '../../store/reducers/cartSlice'

import * as S from './styles'

const ConfirmationStep = () => {
  const dispatch = useDispatch()
  const { orderId } = useSelector((state: RootReducer) => state.cart)

  const handleFinish = () => {
    dispatch(clearCart())
    dispatch(close())
  }

  return (
    <S.CartContainer>
      <S.SidebarTitle>Pedido realizado - {orderId}</S.SidebarTitle>

      <S.TextMessage>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </S.TextMessage>

      <S.TextMessage>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </S.TextMessage>

      <S.TextMessage>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </S.TextMessage>

      <S.TextMessage>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </S.TextMessage>

      <S.ButtonContainer>
        <S.PrimaryButton type="button" onClick={handleFinish}>
          Concluir
        </S.PrimaryButton>
      </S.ButtonContainer>
    </S.CartContainer>
  )
}

export default ConfirmationStep
