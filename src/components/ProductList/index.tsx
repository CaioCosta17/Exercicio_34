import Product from '../Product'
import { Restaurante as RestauranteModel } from '../../models/Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurants: RestauranteModel[]
}

const ProductList = ({ restaurants }: Props) => {
  const getTags = (restaurante: RestauranteModel) => {
    const tags = []

    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }

    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((restaurante) => (
            <Product
              key={restaurante.id}
              id={restaurante.id}
              title={restaurante.titulo}
              description={restaurante.descricao}
              rating={restaurante.avaliacao}
              image={restaurante.capa}
              tags={getTags(restaurante)}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
