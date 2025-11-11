import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const RestaurantsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Duas colunas
  gap: 32px;
  padding: 80px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
