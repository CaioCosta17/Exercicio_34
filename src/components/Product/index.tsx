import { Link } from 'react-router-dom'

import {
  Card,
  Capa,
  TagsContainer,
  Tag,
  Content,
  HeaderRow,
  Description,
  Button
} from './styles'

import EstrelaIcon from '../../assets/images/estrela.png'

type Props = {
  title: string
  rating: number
  description: string
  tags: string[]
  image: string
}

const Product = ({ title, rating, description, tags, image }: Props) => (
  <Card>
    <Capa style={{ backgroundImage: `url(${image})` }} />
    <TagsContainer>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsContainer>
    <Content>
      <HeaderRow>
        <h3>{title}</h3>
        <div>
          {rating}
          <img src={EstrelaIcon} alt="Estrela" />
        </div>
      </HeaderRow>
      <Description>{description}</Description>
      <Link to="/perfil">
        <Button>Saiba mais</Button>
      </Link>
    </Content>
  </Card>
)

export default Product
