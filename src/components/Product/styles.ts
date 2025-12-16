import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  position: relative;
  margin-bottom: 48px;
`

export const Capa = styled.div`
  width: 100%;
  height: 217px;
  background-color: #ddd;
  background-size: cover;
  background-position: center;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 6px 10px;
  font-size: 12px;
  font-weight: bold;
`

export const Content = styled.div`
  padding: 8px;
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 18px;

    img {
      margin-left: 8px;
      width: 18px;
    }

    span {
      color: ${colors.yellow};
    }
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;
`
