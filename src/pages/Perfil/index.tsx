import { useState, useEffect } from 'react'

import HeaderProfile from '../../components/HeaderProfile'
import Banner from '../../components/Banner'
import Prato from '../../components/Prato'
import Modal from '../../components/Modal'

import { Container, List } from './styles'

interface PratoAPI {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

const Perfil = () => {
  const [pratos, setPratos] = useState<PratoAPI[]>([])
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<PratoAPI | null>(
    null
  )

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setPratos(res[0].cardapio)
      })
  }, [])

  const abrirModal = (prato: PratoAPI) => {
    setPratoSelecionado(prato)
    setModalEstaAberto(true)
  }

  return (
    <>
      <HeaderProfile />
      <Banner />

      <Container className="container">
        <List>
          {pratos.map((prato) => (
            <Prato
              key={prato.id}
              id={prato.id}
              nome={prato.nome}
              descricao={prato.descricao}
              foto={prato.foto}
              aoClicar={() => abrirModal(prato)}
            />
          ))}
        </List>
      </Container>

      <Modal
        isOpen={modalEstaAberto}
        onClose={() => setModalEstaAberto(false)}
        prato={pratoSelecionado}
      />
    </>
  )
}

export default Perfil
