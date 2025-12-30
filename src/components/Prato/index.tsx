import { Prato as PratoModel } from '../../models/Restaurant'
import * as S from './styles'

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
    <S.Card onClick={aoClicar}>
      <S.Foto src={prato.foto} alt={prato.nome} />
      <S.Titulo>{prato.nome}</S.Titulo>
      <S.Descricao>{getDescricao(prato.descricao)}</S.Descricao>
      <S.Botao>Mais detalhes</S.Botao>
    </S.Card>
  )
}

export default Prato
