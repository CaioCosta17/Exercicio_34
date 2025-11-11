import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: #ffebd9;
  padding: 0 24px;
  text-align: center;
`

export const LogoTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primaryRed};
  padding-top: 40px;
  padding-bottom: 38px;
`

export const SocialLinks = styled.div`
  padding-bottom: 80px;

  a {
    margin: 0 8px;
    display: inline-block;
    color: ${colors.primaryRed};
    font-size: 24px;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const FooterText = styled.p`
  font-size: 10px;
  color: ${colors.textGray};
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.4;
  padding-bottom: 40px;
`
