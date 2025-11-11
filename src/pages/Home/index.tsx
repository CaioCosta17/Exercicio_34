import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard, { Restaurant } from '../../components/Card'
import { GlobalStyle } from '../../styles'
import { AppContainer, RestaurantsList } from './styles'
import sushi from '../../assets/images/cardapio_hioki_sushi.png'
import pasta from '../../assets/images/cardapio_vita_trattoria.png'

const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: `${sushi}`,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: `${pasta}`,
    infos: ['Italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: `${pasta}`,
    infos: ['Italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: `${pasta}`,
    infos: ['Italiana']
  }
]

const Home: React.FC = () => {
  React.useEffect(() => {
    const styleTag = document.createElement('style')
    styleTag.innerHTML = GlobalStyle
    document.head.appendChild(styleTag)
  }, [])

  return (
    <AppContainer>
      <Header isHome={true} cartCount={0} />

      <main>
        <div className="container">
          <RestaurantsList>
            {mockRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </RestaurantsList>
        </div>
      </main>

      <Footer />
    </AppContainer>
  )
}

export default Home
