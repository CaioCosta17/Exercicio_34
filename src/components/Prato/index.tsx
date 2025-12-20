import { Card, Foto, Titulo, Descricao, Botao } from './styles'

interface PratoProps {
  prato: {
    id: number
    nome: string
    descricao: string
    foto: string
  }
  aoClicar: () => void
}

const Prato = ({ prato, aoClicar }: PratoProps) => {
  const getDescription = (text: string) => {
    if (text.length > 95) return text.slice(0, 92) + '...'
    return text
  }

  return (
    <Card>
      <Foto src={prato.foto} alt={prato.nome} />
      <Titulo>{prato.nome}</Titulo>
      <Descricao>{getDescription(prato.descricao)}</Descricao>
      <Botao onClick={aoClicar}>Mais detalhes</Botao>
    </Card>
  )
}

export default Prato
