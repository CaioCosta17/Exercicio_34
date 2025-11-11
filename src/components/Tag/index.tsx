import React from 'react'

import { TagContainer } from './styles'

type Props = {
  children: React.ReactNode
  isPrimary?: boolean
}

const Tag: React.FC<Props> = ({ children, isPrimary = true }) => (
  <TagContainer $isPrimary={isPrimary}>{children}</TagContainer>
)

export default Tag
