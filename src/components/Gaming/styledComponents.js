import styled from 'styled-components'

export const GamingDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const GamingHeader = styled.div`
  background-color: #f1f5f9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4%;
`
export const GamingImg = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`

export const Heading = styled.h1`
  color: #181818;
  font-family: 'Roboto';
  font-weight: bold;
`
