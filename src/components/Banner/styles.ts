import styled from 'styled-components'
import { colors } from '../../styles'

export const ImagemFundo = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    position: relative;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${colors.white};
  font-weight: 900;
`

export const Categoria = styled.p`
  font-size: 32px;
  color: ${colors.white};
  font-weight: 100;
`
