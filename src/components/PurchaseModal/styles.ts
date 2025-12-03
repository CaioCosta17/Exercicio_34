import styled from 'styled-components'

import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

export const ModalContainer = styled.div`
  max-width: 1024px;
  width: 90%;
  position: relative;

  // Cor principal do tema (Corrigido: primaryRed)
  background-color: ${colors.primaryRed};
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
    max-width: 95%;
  }
`

export const ModalContent = styled.div`
  display: flex;
  color: ${colors.white};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: 200px;
    margin-right: 0;
    margin-bottom: 16px;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  // Estilizando a parte "Serve: de 2 a 3 pessoas"
  & > p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`

export const Title = styled.h4`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  width: 16px;
  height: 16px;

  // Estilizando o SVG injetado:
  svg path {
    // A cor da stroke/linha do SVG é definida aqui (branco)
    stroke: ${colors.white};
  }
`

export const ButtonAddToCart = styled.button`
  // Corrigido: lightBg
  background-color: ${colors.lightBg};
  // Corrigido: primaryRed
  color: ${colors.primaryRed};
  padding: 4px 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;
  max-width: fit-content;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
