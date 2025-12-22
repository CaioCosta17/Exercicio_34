import { ImagemFundo, Titulo, Tipo } from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ capa, tipo, titulo }: Props) => (
  <ImagemFundo capa={capa}>
    <div className="container">
      <Tipo>{tipo}</Tipo>
      <Titulo>{titulo}</Titulo>
    </div>
  </ImagemFundo>
)

export default Banner
