import React from 'react'
import { CardContainer, Title, Description, Button } from './styles'

export type Dish = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

type Props = {
  dish: Dish
}

const DishCard: React.FC<Props> = ({ dish }) => {
  const { name, description, image } = dish

  return (
    <CardContainer>
      <img src={image} alt={name} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Button>Adicionar ao carrinho</Button>
    </CardContainer>
  )
}

export default DishCard
