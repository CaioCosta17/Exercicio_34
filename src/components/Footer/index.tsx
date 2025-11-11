import React from 'react'
import { Link } from 'react-router-dom'
import { FooterContainer, FooterText, LogoTitle, SocialLinks } from './styles'

import redesSociais from '../../assets/images/redes_sociais.png'
import logo from '../../assets/images/logo.png'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <Link to="/">
          <LogoTitle>
            <img src={logo} alt="E-Food" />
          </LogoTitle>
        </Link>

        <SocialLinks>
          <img src={redesSociais} alt="Redes Sociais" />
        </SocialLinks>

        <FooterText>
          A eFood é uma plataforma para distribuição de refeições, e a
          responsabilidade pela entrega, qualidade dos produtos e todo o
          estabelecimento é do comerciante.
        </FooterText>
      </div>
    </FooterContainer>
  )
}

export default Footer
