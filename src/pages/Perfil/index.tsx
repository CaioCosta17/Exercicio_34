import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

import Banner from '../../components/Banner'
import Menu from '../../components/PratoList'
import HeaderProfile from '../../components/HeaderProfile'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant } = useGetRestaurantQuery(id)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderProfile />
      <Banner
        capa={restaurant.capa}
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
      />
      <Menu items={restaurant.cardapio} />
    </>
  )
}

export default Perfil
