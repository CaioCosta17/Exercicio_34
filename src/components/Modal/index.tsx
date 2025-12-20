import { useDispatch } from 'react-redux'

import { add, open } from '../../store/cartSlice'

import {
  ModalContainer,
  ModalContent,
  Conteudo,
  CloseButton,
  ImagemPrato
} from './styles'
import fecharImg from '../../assets/images/close.png'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  prato: {
    id: number
    foto: string
    nome: string
    descricao: string
    porcao: string
    preco: number
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
    <ModalContainer>
      <div className="overlay" onClick={onClose}></div>
      <ModalContent>
        <CloseButton src={fecharImg} alt="Fechar" onClick={onClose} />

        <ImagemPrato src={prato.foto} alt={prato.nome} />

        <Conteudo>
          <h3>{prato.nome}</h3>
          <p>{prato.descricao}</p>
          <p>Serve: {prato.porcao}</p>
          <button onClick={addToCart}>
            Adicionar ao carrinho - R${' '}
            {prato.preco.toFixed(2).replace('.', ',')}
          </button>
        </Conteudo>
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
