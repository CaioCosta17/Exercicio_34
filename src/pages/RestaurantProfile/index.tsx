import Footer from '../../components/Footer'
import Header from '../../components/Header'
import DishCard, { Dish } from '../../components/DishCard'

import { AppContainer, Banner, BannerContent, DishList } from './styles'
import banner from '../../assets/images/banner.png'
import pizza from '../../assets/images/pizza.png'

const mockDishes: Dish[] = [
  {
    id: 101,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9,
    image: `${pizza}`
  },
  {
    id: 102,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9,
    image: `${pizza}`
  },
  {
    id: 103,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9,
    image: `${pizza}`
  },
  {
    id: 104,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9,
    image: `${pizza}`
  },
  {
    id: 105,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9,
    image: `${pizza}`
  },
  {
    id: 106,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9,
    image: `${pizza}`
  }
]

const RestaurantProfile = () => {
  const restaurantData = {
    category: 'Italiana',
    name: 'La Dolce Vita Trattoria',
    bannerImage: `${banner}`
  }

  return (
    <AppContainer>
      <Header isHome={false} cartCount={0} />

      <main>
        <Banner $backgroundImage={restaurantData.bannerImage}>
          <div className="container">
            <BannerContent />
          </div>
        </Banner>

        <div className="container">
          <DishList>
            {mockDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </DishList>
        </div>
      </main>

      <Footer />
    </AppContainer>
  )
}

export default RestaurantProfile
