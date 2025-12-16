import { HeaderContainer, Logo, Title } from './styles'

import logoImg from '../../assets/images/logo.png'

const Header = () => (
  <HeaderContainer>
    <Logo src={logoImg} alt="Efood" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeaderContainer>
)

export default Header
