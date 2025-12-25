import styled from 'styled-components'

import { colors } from '../../styles'

import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 1;
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

export const SidebarContainer = styled.aside`
  background-color: ${colors.primary};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    margin-bottom: 24px;
    flex: 1;
    overflow-y: auto;
  }

  .close-button {
    background: transparent;
    border: none;
    color: ${colors.white};
    font-size: 24px;
    cursor: pointer;
    align-self: flex-end;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
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

export const SidebarTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.footerHeaderBg};
  margin-bottom: 16px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.footerHeaderBg};
  }

  input {
    padding: 8px;
    border: 1px solid ${colors.footerHeaderBg};
    background-color: ${colors.footerHeaderBg};
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    color: #4b4b4b;
    border: none;

    &.error {
      border: 2px solid red;
    }
  }

  small {
    color: ${colors.footerHeaderBg};
    font-size: 12px;
    font-weight: 400;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 34px;

  ${InputGroup} {
    flex: 1;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const PrimaryButton = styled.button`
  background-color: ${colors.footerHeaderBg};
  color: ${colors.primary};
  border: none;
  padding: 4px;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
`

export const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: none;
  color: ${colors.footerHeaderBg};
`

export const TextMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.footerHeaderBg};
  margin-bottom: 24px;
`
