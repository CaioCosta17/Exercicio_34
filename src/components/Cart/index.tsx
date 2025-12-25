import { useDispatch, useSelector } from 'react-redux'

import PaymentStep from './PaymentStep'
import DeliveryStep from './DeliveryStep'
import ConfirmationStep from './ConfirmationStep'
import { close } from '../../store/reducers/cartSlice'
import { RootReducer } from '../../store/reducers/index'

import * as S from './styles'

const CartEmpty = () => (
  <>
    <S.SidebarTitle>Carrinho</S.SidebarTitle>
    <S.TextMessage>Seu carrinho está vazio.</S.TextMessage>
  </>
)

const Cart = () => {
  const { isOpen, currentStep, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  if (!isOpen) return null

  const renderStep = () => {
    if (currentStep === 'cart') {
      if (items.length > 0) {
        return <DeliveryStep />
      }
      return <CartEmpty />
    }

    if (currentStep === 'delivery') return <DeliveryStep />
    if (currentStep === 'payment') return <PaymentStep />
    if (currentStep === 'confirmation') return <ConfirmationStep />

    return null
  }

  return (
    <>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.CartContainer>
        {currentStep !== 'confirmation' && (
          <button className="close-button" onClick={() => dispatch(close())}>
            X
          </button>
        )}

        {renderStep()}
      </S.CartContainer>
    </>
  )
}

export default Cart
