import styled from 'styled-components'
import { colors } from '../../styles'

export const TagContainer = styled.div<{ $isPrimary?: boolean }>`
  background-color: ${(props) =>
    props.$isPrimary ? colors.primaryRed : colors.primaryRed};
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  border-radius: 6px;
  text-transform: capitalize;
`
