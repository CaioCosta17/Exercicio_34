import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cartSlice'

import fecharImg from '../../assets/images/close.png'

import * as S from './styles'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  prato: {
    id: number
    image: string
    name: string
    description: string
    portion: string
    price: number
  } | null
}

const Modal = ({ isOpen, onClose, prato }: ModalProps) => {
  const dispatch = useDispatch()

  if (!isOpen || !prato) return null

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
    onClose()
  }

  return (
    <S.ModalContainer>
      <div className="overlay" onClick={onClose}></div>
      <S.ModalContent>
        <S.CloseButton src={fecharImg} alt="Fechar" onClick={onClose} />

        <S.ImagemPrato src={prato.image} alt={prato.name} />

        <S.Conteudo>
          <h3>{prato.name}</h3>
          <p>{prato.description}</p>
          <p>Serve: {prato.portion}</p>
          <button onClick={addToCart}>
            Adicionar ao carrinho - R${' '}
            {prato.price.toFixed(2).replace('.', ',')}
          </button>
        </S.Conteudo>
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal
