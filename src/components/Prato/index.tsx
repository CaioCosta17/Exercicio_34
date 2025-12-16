import { Card, Foto, Titulo, Descricao, Botao } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
  key: number
  id: number
  aoClicar: () => void
}

const Prato = ({ foto, nome, descricao, aoClicar }: Props) => (
  <Card>
    <Foto src={foto} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>{descricao}</Descricao>
    <Botao onClick={aoClicar}>Adicionar ao carrinho</Botao>
  </Card>
)

export default Prato
