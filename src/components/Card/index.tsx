import React from 'react'

import Tag from '../Tag'
import {
  CardContainer,
  InfoBar,
  Title,
  Rating,
  Description,
  Button
} from './styles'

export type Restaurant = {
  id: number
  title: string
  rating: number
  description: string
  image: string
  infos: string[]
}

type Props = {
  restaurant: Restaurant
}

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  const { id, title, rating, description, image, infos } = restaurant

  return (
    <CardContainer>
      <div className="header">
        <img src={image} alt={title} />
        <div className="tags">
          {infos.map((info) => (
            <Tag key={info} isPrimary={false}>
              {info}
            </Tag>
          ))}
        </div>
      </div>

      <InfoBar>
        <Title>{title}</Title>
        <Rating>
          <span>{rating.toFixed(1)}</span>
        </Rating>
      </InfoBar>

      <Description>{description}</Description>

      <Button to={`/restaurant/${id}`}>Saiba mais</Button>
    </CardContainer>
  )
}

export default RestaurantCard
