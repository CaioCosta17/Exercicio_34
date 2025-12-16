import { FooterContainer, SocialLinks, Disclaimer, Logo } from './styles'

import Social from '../../assets/images/redes_sociais.png'
import LogoImg from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => (
  <FooterContainer>
    <Link to="/">
      <Logo src={LogoImg} />
    </Link>
    <SocialLinks src={Social} />
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </FooterContainer>
)

export default Footer
