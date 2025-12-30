import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import { startCheckout, setCheckoutStep } from '../../store/reducers/cartSlice'

import * as S from './styles'

const DeliveryStep = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(
        startCheckout({
          receiver: values.receiver,
          address: values.address,
          city: values.city,
          cep: values.cep,
          number: values.number,
          complement: values.complement
        })
      )
    }
  })

  const getErrorMessage = (fieldName: string) => {
    const isTouched = formik.touched[fieldName as keyof typeof formik.values]
    const error = formik.errors[fieldName as keyof typeof formik.values]
    return isTouched && error
  }

  return (
    <>
      <S.SidebarTitle>Entrega</S.SidebarTitle>
      <S.FormContainer onSubmit={formik.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            id="receiver"
            type="text"
            name="receiver"
            value={formik.values.receiver}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={getErrorMessage('receiver') ? 'error' : ''}
          />
          {getErrorMessage('receiver') && (
            <small>{formik.errors.receiver}</small>
          )}
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={getErrorMessage('address') ? 'error' : ''}
          />
          {getErrorMessage('address') && <small>{formik.errors.address}</small>}
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={getErrorMessage('city') ? 'error' : ''}
          />
          {getErrorMessage('city') && <small>{formik.errors.city}</small>}
        </S.InputGroup>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="cep">CEP</label>
            <InputMask
              id="cep"
              name="cep"
              mask="99999-999"
              value={formik.values.cep}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={getErrorMessage('cep') ? 'error' : ''}
            />
            {getErrorMessage('cep') && <small>{formik.errors.cep}</small>}
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              type="text"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={getErrorMessage('number') ? 'error' : ''}
            />
            {getErrorMessage('number') && <small>{formik.errors.number}</small>}
          </S.InputGroup>
        </S.Row>

        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            id="complement"
            type="text"
            name="complement"
            value={formik.values.complement}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </S.InputGroup>

        <S.ButtonContainer>
          <S.PrimaryButton
            type="submit"
            disabled={!formik.isValid && formik.dirty}
          >
            Continuar com o pagamento
          </S.PrimaryButton>

          <S.SecondaryButton
            type="button"
            onClick={() => dispatch(setCheckoutStep('cart'))}
          >
            Voltar para o carrinho
          </S.SecondaryButton>
        </S.ButtonContainer>
      </S.FormContainer>
    </>
  )
}

export default DeliveryStep
