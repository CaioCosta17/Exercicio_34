import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${colors.primaryRed};
  color: ${colors.lightBg};
  padding: 8px;
  position: relative;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
    margin-bottom: 8px;
  }
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const Button = styled.button`
  background-color: ${colors.lightBg};
  color: ${colors.primaryRed};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  width: 100%;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
