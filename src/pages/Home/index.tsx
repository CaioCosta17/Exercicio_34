import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { Restaurante } from '../../models/Restaurant'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
      .catch((err) => console.log('Erro ao carregar, verifique a API:', err))
  }, [])

  return (
    <>
      <Header />
      <ProductList restaurants={restaurantes} />
    </>
  )
}

export default Home
