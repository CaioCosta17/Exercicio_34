import styled from 'styled-components'

import { colors } from '../../styles'

import headerBg from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${headerBg});
  height: 186px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;

    img {
      margin-bottom: 8px;
    }
  }
`

export const LinkRestaurantes = styled.a`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  text-decoration: none;

  @media (max-width: 768px) {
    display: none;
  }
`

export const CartButton = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
