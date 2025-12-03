import React from 'react'

export interface Dish {
  id: number
  name: string
  description: string
  price: number
  image: string
  porcao?: string
}

import {
  Overlay,
  ModalContainer,
  ModalContent,
  Image,
  TextContent,
  ButtonClose,
  ButtonAddToCart
} from './styles'

// Componente SVG para o botão de fechar
const CloseSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9189 3.08112C11.9079 2.06734 10.6033 1.34241 9.17702 1.00282C7.75078 0.663229 6.26259 0.722512 4.88725 1.17646C3.51192 1.63041 2.3023 2.46328 1.4398 3.56588C0.577291 4.66849 0.098418 6.00938 0.0631671 7.40428C0.0279161 8.79917 0.438499 10.1601 1.23821 11.3195C2.03792 12.4789 3.19794 13.3857 4.5458 13.9392C5.89366 14.4927 7.37799 14.6672 8.84157 14.4449C10.3051 14.2227 11.6967 13.6125 12.8361 12.6713M12.9189 3.08112C13.9317 4.09459 14.6593 5.39956 14.9996 6.82586C15.34 8.25217 15.2806 9.74039 14.8267 11.1157C14.3727 12.491 13.54 13.7006 12.4374 14.5631C11.3348 15.4256 9.9939 15.9045 8.599 15.9397C7.20411 15.975 5.84323 15.5644 4.68383 14.7647C3.52443 13.965 2.61763 12.805 2.06413 11.4571C1.51063 10.1092 1.33611 8.62489 1.55835 7.16131C1.78059 5.69774 2.39077 4.30611 3.332 3.16666"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.48535 5.48528L10.5146 10.5147"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.48535 10.5147L10.5146 5.48528"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

interface Props {
  isOpen: boolean
  dish: Dish | null
  onClose: () => void
  onAddToCart: (dish: Dish) => void
}

const PurchaseModal: React.FC<Props> = ({
  isOpen,
  dish,
  onClose,
  onAddToCart
}) => {
  if (!isOpen || !dish) {
    return null
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleAddToCart = () => {
    onAddToCart(dish)
    onClose()
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalContent>
          <Image src={dish.image} alt={dish.name} />
          <TextContent>
            <h4>{dish.name}</h4>
            <p>{dish.description}</p>
            <p>Serve: {dish.porcao ? dish.porcao : 'de 2 a 3 pessoas'}</p>
            <ButtonAddToCart onClick={handleAddToCart}>
              Adicionar ao carrinho - {formatPrice(dish.price)}
            </ButtonAddToCart>
          </TextContent>
          <ButtonClose onClick={onClose} type="button">
            <CloseSVG />
          </ButtonClose>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

export default PurchaseModal
