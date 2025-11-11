import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.primaryRed};
  padding: 8px;
  position: relative;

  .header {
    position: relative;
    margin-bottom: 8px;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
  }

  .tags {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
  }
`

export const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primaryRed};
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${colors.primaryRed};

  span {
    margin-right: 4px;
  }

  &::after {
    content: '⭐';
    color: ${colors.starYellow};
    margin-left: 4px;
    font-size: 16px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${colors.lightBg};
`

export const Button = styled(Link)`
  background-color: ${colors.primaryRed};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 16px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
