import React from 'react'
// Importe NavLink
import { NavLink } from 'react-router-dom'

import {
  HeaderContainer,
  Logo,
  Titulo,
  LinksContainer,
  LinkItem
} from './styles'

import logo from '../../assets/images/logo.png'
import headerFundo from '../../assets/images/fundo.png'

interface HeaderProps {
  isHome?: boolean
  cartCount?: number
}

const Header = ({ isHome = true, cartCount = 0 }: HeaderProps) => {
  const isProfile = !isHome

  return (
    <HeaderContainer
      isProfile={isProfile}
      style={{ backgroundImage: `url(${headerFundo})` }}
    >
      {isHome ? (
        <>
          <Logo>
            <img src={logo} alt="E-Food" />
          </Logo>
          <Titulo>
            Viva experiências gastronômicas <br />
            no conforto da sua casa
          </Titulo>
        </>
      ) : (
        <LinksContainer isProfile={isProfile}>
          <NavLink to="/">
            <LinkItem as="span">Restaurantes</LinkItem>
          </NavLink>

          <Logo>
            <img src={logo} alt="Logo E-Food" />
          </Logo>

          <LinkItem as="span">{cartCount} produto(s) no carrinho</LinkItem>
        </LinksContainer>
      )}
    </HeaderContainer>
  )
}

export default Header
