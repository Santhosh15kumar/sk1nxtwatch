import styled from 'styled-components'

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex;
  margin-bottom: 5%;
  width: 30%;

  @media screen and (max-width: 767px) {
    width: 50%;
  }
`

export const ImageEl = styled.img`
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const Para = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-family: 'Roboto';
`
