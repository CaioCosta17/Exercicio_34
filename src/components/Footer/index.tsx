import { Link } from 'react-router-dom'

import Social from '../../assets/images/redes_sociais.png'
import LogoImg from '../../assets/images/logo.png'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <Link to="/">
      <S.Logo src={LogoImg} />
    </Link>
    <S.SocialLinks src={Social} />
    <S.Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Disclaimer>
  </S.FooterContainer>
)

export default Footer
