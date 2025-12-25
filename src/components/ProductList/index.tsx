import Product from '../Product'
import { Restaurante as RestauranteModel } from '../../models/Restaurant'

import * as S from './styles'

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
    <S.Container>
      <div className="container">
        <S.List>
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
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList
