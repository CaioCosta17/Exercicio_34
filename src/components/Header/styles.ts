import styled from 'styled-components'

import { colors } from '../../styles'

export const HeaderContainer = styled.header<{ isProfile?: boolean }>`
  height: 386px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  ${(props) =>
    props.isProfile &&
    `
      height: 186px;
    `}
`

export const Logo = styled.div`
  img {
    width: 125px;
    height: auto;
  }
`

export const Titulo = styled.h1`
  margin-top: 138px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  color: ${colors.primaryRed};
  max-width: 540px;

  @media (max-width: 768px) {
    margin-top: 80px;
    font-size: 28px;
    line-height: 36px;
    padding: 0 16px;
  }
`

export const LinksContainer = styled.nav<{ isProfile?: boolean }>`
  width: 100%;
  max-width: 1024px;
  margin: 10px auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a,
  span {
    text-decoration: none;
    color: ${colors.primaryRed};
    font-weight: bold;
    font-size: 18px;
  }

  a {
    margin-right: 64px;
  }

  span {
    margin-left: 64px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    flex-wrap: wrap;
    justify-content: center;

    a,
    span {
      margin: 8px 16px;
      order: 2;
    }

    ${Logo} {
      order: 1;
      width: 100%;
      text-align: center;
      margin-bottom: 16px;
      margin: 0;
    }
  }
`

export const LinkItem = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primaryRed};
  cursor: pointer;
  text-decoration: none;
`
