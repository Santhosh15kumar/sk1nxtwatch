import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 20%;
  margin-top: 5%;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const TopCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const BottomCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 90%;
`
export const Para = styled.p`
  font-family: 'Roboto';
  text-align: center;
`

export const Heading = styled.h4`
  font-family: 'Roboto';
  font-weight: bold;
`
