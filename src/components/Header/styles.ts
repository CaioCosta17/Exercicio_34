import styled from 'styled-components'
import { colors } from '../../styles'

import Fundo from '../../assets/images/fundo.png'

export const HeaderContainer = styled.header`
  background-color: ${colors.footerHeaderBg};
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${Fundo});
  background-repeat: repeat;
  background-position: center;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 80px;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  max-width: 540px;
`
