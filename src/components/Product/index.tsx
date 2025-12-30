import { Link } from 'react-router-dom'

import StarIcon from '../../assets/images/estrela.png'

import * as S from './styles'

type Props = {
  id: number
  title: string
  rating: number
  description: string
  tags: string[]
  image: string
}

const Product = ({ id, title, rating, description, tags, image }: Props) => (
  <S.Card>
    <S.Capa style={{ backgroundImage: `url(${image})` }} />
    <S.TagsContainer>
      {tags.map((tag) => (
        <S.Tag key={tag}>{tag}</S.Tag>
      ))}
    </S.TagsContainer>
    <S.Content>
      <S.HeaderRow>
        <h3>{title}</h3>
        <div>
          {rating}
          <img src={StarIcon} alt="Estrela" />
        </div>
      </S.HeaderRow>
      <S.Description>{description}</S.Description>
      <Link to={`/perfil/${id}`}>
        <S.Button>Saiba mais</S.Button>
      </Link>
    </S.Content>
  </S.Card>
)

export default Product
