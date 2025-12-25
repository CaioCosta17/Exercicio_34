import styled from 'styled-components'

import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.footerHeaderBg};
  padding: 40px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SocialLinks = styled.img`
  margin-bottom: 80px;
  cursor: pointer;
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const Disclaimer = styled.p`
  font-size: 10px;
  max-width: 480px;
`
