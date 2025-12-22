import styled from 'styled-components'
import { colors } from '../../styles'

interface ImagemFundoProps {
  capa: string
}

export const ImagemFundo = styled.div<ImagemFundoProps>`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.capa});

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
  font-weight: 900;
  color: ${colors.white};
`

export const Tipo = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`
