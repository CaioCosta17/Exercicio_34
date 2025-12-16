import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 56px;
  padding-bottom: 120px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
