import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
