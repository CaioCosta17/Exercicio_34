import { Card, Foto, Titulo, Descricao, Botao } from './styles'
import { Prato as PratoModel } from '../../models/Restaurant'

type Props = {
  prato: PratoModel
  aoClicar: () => void
}

const Prato = ({ prato, aoClicar }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <Foto src={prato.foto} alt={prato.nome} />
      <Titulo>{prato.nome}</Titulo>
      <Descricao>{getDescricao(prato.descricao)}</Descricao>
      <Botao onClick={aoClicar}>Mais detalhes</Botao>
    </Card>
  )
}

export default Prato
