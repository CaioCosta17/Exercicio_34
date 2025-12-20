import styled, { keyframes } from 'styled-components'

import { colors } from '../../styles'

const slideIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 32px;
  max-width: 1024px;
  width: 100%;
  display: flex;
  gap: 24px;

  animation: ${slideIn} 0.5s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
  }

  > header {
    display: flex;
    justify-content: flex-end;
  }
`

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    margin-top: 16px;
    background-color: ${colors.footerHeaderBg};
    color: ${colors.primary};
    border: none;
    padding: 4px 8px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    width: fit-content;
  }
`

export const ImagemPrato = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-bottom: 16px;
  }
`

export const CloseButton = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
