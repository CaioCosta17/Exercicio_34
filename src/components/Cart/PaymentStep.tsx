import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store/reducers'
import { usePurchaseMutation } from '../../services/api'
import {
  finishCheckout,
  selectCartTotal,
  setCheckoutStep
} from '../../store/reducers/cartSlice'

import * as S from './styles'
import { parseBrl } from '../../utils'

const PaymentStep = () => {
  const dispatch = useDispatch()
  const [purchase, { isLoading }] = usePurchaseMutation()

  const { items, delivery } = useSelector((state: RootReducer) => state.cart)
  const totalAmount = useSelector(selectCartTotal)

  const checkNumberLength = (targetLength: number) => {
    return (value?: string) => {
      if (!value) return false
      const onlyNumbers = value.replace(/\D/g, '')
      return onlyNumbers.length === targetLength
    }
  }

  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'O nome precisa ser completo')
        .required('O campo é obrigatório'),

      cardNumber: Yup.string()
        .required('O campo é obrigatório')
        .test(
          'is-valid-card',
          'O cartão precisa ter 16 números',
          checkNumberLength(16)
        ),

      cvv: Yup.string()
        .required('O campo é obrigatório')
        .test(
          'is-valid-cvv',
          'O CVV precisa de 3 números',
          checkNumberLength(3)
        ),

      expiresMonth: Yup.string()
        .required('O campo é obrigatório')
        .test('is-valid-month', 'Mês incorreto', (value) => {
          if (!value) return false
          const mes = Number(value.replace(/\D/g, ''))
          return mes >= 1 && mes <= 12
        }),

      expiresYear: Yup.string()
        .required('O campo é obrigatório')
        .test('is-valid-year', 'Ano incorreto', checkNumberLength(2))
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
            price: item.price as number
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
        Pagamento - Valor a pagar {parseBrl(totalAmount)}
      </S.SidebarTitle>

      <S.InputGroup>
        <label htmlFor="cardName">Nome no cartão</label>
        <input
          id="cardName"
          type="text"
          name="cardName"
          value={formik.values.cardName}
          onChange={(e) => {
            const onlyLetters = e.target.value.replace(
              /[^a-zA-Z\u00C0\u00FF ]/g,
              ''
            )
            formik.setFieldValue('cardName', onlyLetters)
          }}
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

        <S.SecondaryButton
          type="button"
          onClick={() => dispatch(setCheckoutStep('delivery'))}
        >
          Voltar para a edição de endereço
        </S.SecondaryButton>
      </S.ButtonContainer>
    </S.FormContainer>
  )
}

export default PaymentStep
