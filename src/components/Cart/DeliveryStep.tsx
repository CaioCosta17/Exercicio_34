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
      receiver: Yup.string().required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O CEP precisa ter 8 números')
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
