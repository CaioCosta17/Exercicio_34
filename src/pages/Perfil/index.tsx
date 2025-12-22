import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurante } from '../../models/Restaurant'
import { Container, List } from './styles'

import Header from '../../components/Header'
import Prato from '../../components/Prato'
import Banner from '../../components/Banner'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />

      <Banner
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />

      <Container>
        <div className="container">
          <List>
            {restaurante.cardapio.map((prato) => (
              <Prato key={prato.id} prato={prato} aoClicar={() => ''} />
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}

export default Perfil
