import * as S from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ capa, tipo, titulo }: Props) => (
  <S.ImagemFundo capa={capa}>
    <div className="container">
      <S.Tipo>{tipo}</S.Tipo>
      <S.Titulo>{titulo}</S.Titulo>
    </div>
  </S.ImagemFundo>
)

export default Banner
