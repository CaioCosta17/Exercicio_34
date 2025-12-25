import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store/reducers'
import { usePurchaseMutation } from '../../services/api'
import { finishCheckout, selectCartTotal } from '../../store/reducers/cartSlice'

import * as S from './styles'

const PaymentStep = () => {
  const dispatch = useDispatch()
  const [purchase, { isLoading }] = usePurchaseMutation()

  const { items, delivery } = useSelector((state: RootReducer) => state.cart)
  const totalAmount = useSelector(selectCartTotal)

  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('Obrigatório'),
      cardNumber: Yup.string().required('Obrigatório'),
      cvv: Yup.string().required('Obrigatório').max(3),
      expiresMonth: Yup.string().required('Obrigatório'),
      expiresYear: Yup.string().required('Obrigatório')
    }),
    onSubmit: async (values) => {
      if (!delivery) {
        alert('Dados de entrega não encontrados')
        return
      }

      try {
        const res = await purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.price
          })),
          delivery: {
            receiver: delivery.receiver,
            address: {
              description: delivery.address,
              city: delivery.city,
              zipCode: delivery.cep,
              number: Number(delivery.number),
              complement: delivery.complement
            }
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber.replace(/\s/g, ''),
              code: Number(values.cvv),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        }).unwrap()

        dispatch(finishCheckout(res.orderId))
      } catch (error) {
        console.error(error)
        alert('Erro ao processar pagamento.')
      }
    }
  })

  const getErrorMessage = (fieldName: string) => {
    const isTouched = formik.touched[fieldName as keyof typeof formik.values]
    const error = formik.errors[fieldName as keyof typeof formik.values]
    return isTouched && error
  }

  return (
    <S.FormContainer onSubmit={formik.handleSubmit}>
      <S.SidebarTitle>
        Pagamento - Valor a pagar R$ {totalAmount}
      </S.SidebarTitle>

      <S.InputGroup>
        <label htmlFor="cardName">Nome no cartão</label>
        <input
          id="cardName"
          type="text"
          name="cardName"
          value={formik.values.cardName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={getErrorMessage('cardName') ? 'error' : ''}
        />
        {getErrorMessage('cardName') && <small>{formik.errors.cardName}</small>}
      </S.InputGroup>

      <S.Row>
        <S.InputGroup>
          <label htmlFor="cardNumber">Número do cartão</label>
          <InputMask
            id="cardNumber"
            name="cardNumber"
            mask="9999.9999.9999.9999"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={getErrorMessage('cardNumber') ? 'error' : ''}
          />
          {getErrorMessage('cardNumber') && (
            <small>{formik.errors.cardNumber}</small>
          )}
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="cvv">CVV</label>
          <InputMask
            id="cvv"
            name="cvv"
            mask="999"
            value={formik.values.cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={getErrorMessage('cvv') ? 'error' : ''}
          />
          {getErrorMessage('cvv') && <small>{formik.errors.cvv}</small>}
        </S.InputGroup>
      </S.Row>

      <S.Row>
        <S.InputGroup>
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <InputMask
            id="expiresMonth"
            name="expiresMonth"
            mask="99"
            value={formik.values.expiresMonth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={getErrorMessage('expiresMonth') ? 'error' : ''}
          />
          {getErrorMessage('expiresMonth') && (
            <small>{formik.errors.expiresMonth}</small>
          )}
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <InputMask
            id="expiresYear"
            name="expiresYear"
            mask="99"
            value={formik.values.expiresYear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={getErrorMessage('expiresYear') ? 'error' : ''}
          />
          {getErrorMessage('expiresYear') && (
            <small>{formik.errors.expiresYear}</small>
          )}
        </S.InputGroup>
      </S.Row>

      <S.ButtonContainer>
        <S.PrimaryButton type="submit" disabled={isLoading}>
          {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
        </S.PrimaryButton>
      </S.ButtonContainer>
    </S.FormContainer>
  )
}

export default PaymentStep
