import styled from 'styled-components'

import { colors } from '../../styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ul {
    list-style: none;
  }

  @media (max-width: 768px) {
    max-width: 80%; // Em tablets e celulares, deixa um espaço para ver o fundo
  }

  @media (max-width: 480px) {
    max-width: 90%; // Quase toda a tela em celulares muito pequenos
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.footerHeaderBg};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.primary};
    font-weight: 900;
    font-size: 18px;
  }

  p {
    color: ${colors.primary};
    font-size: 14px;
    margin-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.footerHeaderBg};
  font-weight: 700;
  font-size: 14px;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const ButtonContainer = styled.button`
  background-color: ${colors.footerHeaderBg};
  color: ${colors.primary};
  border: none;
  padding: 4px;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
`
