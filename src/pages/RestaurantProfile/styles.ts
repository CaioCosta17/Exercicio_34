import styled from 'styled-components'
import { colors } from '../../styles'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const HeaderProfile = styled.header`
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  aling-items: center;
  padding: 0;
`

export const Banner = styled.div<{ $backgroundImage: string }>`
  height: 280px;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export const BannerContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 24px 0;
  width: 100%;
  color: ${colors.white};

  .container {
    padding-top: 60px;
  }

  span {
    font-size: 32px;
    font-weight: 100;
    text-transform: capitalize;
    display: block;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 36px;
    font-weight: 900;
  }
`

export const DishList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 80px 0;
  color: #ffebd9;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
