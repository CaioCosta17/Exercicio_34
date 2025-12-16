import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.primary};
  color: ${colors.footerHeaderBg};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Foto = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex-grow: 1;
`

export const Botao = styled.button`
  width: 100%;
  background-color: ${colors.footerHeaderBg};
  color: ${colors.primary};
  border: none;
  padding: 4px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`
