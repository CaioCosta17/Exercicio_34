import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Prato as PratoAPI } from '../../models/Restaurant'
import { add, open } from '../../store/reducers/cartSlice'
import { Plate } from '../../models/Prato'
import { parseBrl } from '../../utils'
import Prato from '../Prato'

import close from '../../assets/images/close.png'

import * as S from './styles'

type Props = {
  items: PratoAPI[]
}

const Menu = ({ items }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<{
    isVisible: boolean
    item: PratoAPI | null
  }>({
    isVisible: false,
    item: null
  })

  const addToCart = () => {
    if (modal.item) {
      const pratoParaAdicionar: Plate = {
        id: modal.item.id,
        name: modal.item.nome,
        description: modal.item.descricao,
        image: modal.item.foto,
        price: modal.item.preco,
        portion: modal.item.porcao
      }

      dispatch(add(pratoParaAdicionar))
      dispatch(open())
      setModal({ isVisible: false, item: null })
    }
  }

  if (!items || items.length === 0) {
    return <h3>Cardápio não disponível</h3>
  }

  return (
    <>
      <S.Container>
        <div className="container">
          <S.List>
            {items.map((prato) => (
              <Prato
                key={prato.id}
                prato={prato}
                aoClicar={() => setModal({ isVisible: true, item: prato })}
              />
            ))}
          </S.List>
        </div>
      </S.Container>

      {modal.item && (
        <S.Modal className={modal.isVisible ? 'visible' : ''}>
          <S.ModalContent className="container">
            <header>
              <img
                src={close}
                alt="close"
                onClick={() => setModal({ isVisible: false, item: null })}
              />
            </header>

            <div className="content">
              <img src={modal.item.foto} alt={modal.item.nome} />
              <div>
                <h4>{modal.item.nome}</h4>
                <p>{modal.item.descricao}</p>
                <p>Porção: {modal.item.porcao}</p>

                <S.ButtonModal onClick={addToCart}>
                  Adicionar ao carrinho - {parseBrl(modal.item.preco)}
                </S.ButtonModal>
              </div>
            </div>
          </S.ModalContent>
          <div
            className="overlay"
            onClick={() => setModal({ isVisible: false, item: null })}
          ></div>
        </S.Modal>
      )}
    </>
  )
}

export default Menu
