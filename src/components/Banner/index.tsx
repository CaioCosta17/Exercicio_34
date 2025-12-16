import { ImagemFundo, Titulo, Categoria } from './styles'
import capaImg from '../../assets/images/cardapio_vita_trattoria.png'

const Banner = () => (
  <ImagemFundo style={{ backgroundImage: `url(${capaImg})` }}>
    <div className="container">
      <Categoria>Italiana</Categoria>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </ImagemFundo>
)

export default Banner
