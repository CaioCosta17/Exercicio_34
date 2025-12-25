import * as S from './styles'

import logoImg from '../../assets/images/logo.png'

const Header = () => (
  <S.HeaderContainer>
    <S.Logo src={logoImg} alt="Efood" />
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.HeaderContainer>
)

export default Header
