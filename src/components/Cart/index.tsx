import { useDispatch, useSelector } from 'react-redux'

import { close, remove, setCheckoutStep } from '../../store/reducers/cartSlice'
import { RootReducer } from '../../store/reducers/index'
import ConfirmationStep from './ConfirmationStep'
import DeliveryStep from './DeliveryStep'
import PaymentStep from './PaymentStep'
import { parseBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, currentStep, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + (valorAtual.price || 0)
    }, 0)
  }

  const goToDelivery = () => {
    dispatch(setCheckoutStep('delivery'))
  }

  if (!isOpen) return null

  return (
    <S.CartContainer>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.SidebarContainer>
        {currentStep === 'cart' && (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h3>{item.name}</h3>
                        <span>{parseBrl(item.price)}</span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.TotalContainer>
                  Valor total <span>{parseBrl(getTotalPrice())}</span>
                </S.TotalContainer>
                <S.ButtonContainer>
                  <S.PrimaryButton
                    title="Clique para continuar com a entrega"
                    type="button"
                    onClick={goToDelivery}
                  >
                    Continuar com a entrega
                  </S.PrimaryButton>
                </S.ButtonContainer>
              </>
            ) : (
              <S.MessageContainer>
                <p>
                  O carrinho está vazio, adicione pelo menos um produto para
                  continuar com a compra
                </p>
              </S.MessageContainer>
            )}
          </>
        )}

        {currentStep === 'delivery' && <DeliveryStep />}
        {currentStep === 'payment' && <PaymentStep />}
        {currentStep === 'confirmation' && <ConfirmationStep />}
      </S.SidebarContainer>
    </S.CartContainer>
  )
}

export default Cart
