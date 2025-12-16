import Product from '../Product'
import { Container, List } from './styles'
import { Restaurant } from '../../models/Restaurant'

type Props = {
  restaurants: Restaurant[]
}

const ProductList = ({ restaurants }: Props) => (
  <Container className="container">
    <List>
      {restaurants.map((res) => (
        <Product
          key={res.id}
          title={res.title}
          rating={res.rating}
          description={res.description}
          tags={res.tags}
          image={res.image}
        />
      ))}
    </List>
  </Container>
)

export default ProductList
