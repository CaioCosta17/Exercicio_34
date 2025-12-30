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
    <S.CartContainer className="is-open">
      <S.Overlay onClick={handleFinish} />

      <S.SidebarContainer>
        <S.MessageContainer>
          <h3>Pedido realizado - {orderId}</h3>

          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </S.MessageContainer>

        <S.ButtonContainer>
          <S.PrimaryButton type="button" onClick={handleFinish}>
            Concluir
          </S.PrimaryButton>
        </S.ButtonContainer>
      </S.SidebarContainer>
    </S.CartContainer>
  )
}

export default ConfirmationStep
