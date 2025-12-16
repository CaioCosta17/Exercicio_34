import styled from 'styled-components'
import { colors } from '../../styles'
import headerBg from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${headerBg});
  height: 186px;
  display: flex;
  align-items: center;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const LinkRestaurantes = styled.a`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  text-decoration: none;
`

export const CartButton = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  cursor: pointer;
`
