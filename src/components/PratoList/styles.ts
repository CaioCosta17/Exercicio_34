import styled from 'styled-components'

import { colors } from '../../styles'

type Props = {
  background?: 'gray' | 'black'
}

export const Container = styled.div<Props>`
  padding-top: 56px;
  padding-bottom: 120px;
  background-color: ${(props) =>
    props.background === 'black' ? '#333333' : '#FFEBF2'};
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.primary};
  padding: 32px;
  position: relative;
  z-index: 1;
  max-width: 1024px;
  width: 100%;

  header {
    display: flex;
    justify-content: flex-end;

    img {
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }

  .content {
    display: flex;
    margin-top: 16px;

    > img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      margin-right: 24px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h4 {
        font-size: 18px;
        font-weight: 900;
        color: ${colors.white};
        margin-bottom: 8px;
      }

      p {
        font-size: 14px;
        line-height: 22px;
        color: ${colors.white};
        margin-bottom: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 16px;

    .content {
      flex-direction: column;

      > img {
        width: 100%;
        height: 200px;
        margin-right: 0;
        margin-bottom: 16px;
      }
    }
  }
`

export const ButtonModal = styled.button`
  background-color: ${colors.footerHeaderBg};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 16px;
  border: none;
  cursor: pointer;
  width: fit-content;

  &:hover {
    opacity: 0.9;
  }
`
