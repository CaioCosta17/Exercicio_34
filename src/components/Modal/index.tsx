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
    foto: string
    nome: string
    descricao: string
    porcao: string
    preco: number
  } | null
}

const Modal = ({ isOpen, onClose, prato }: ModalProps) => {
  if (!isOpen || !prato) return null

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
          <button>Adicionar ao carrinho - R$ {prato.preco.toFixed(2)}</button>
        </Conteudo>
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
