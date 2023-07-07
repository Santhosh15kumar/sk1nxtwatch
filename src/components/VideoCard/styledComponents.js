import styled from 'styled-components'

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 30%;
  margin-bottom: 3%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const ImageEl = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ParaDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const Para = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.font};
  font-family: 'Roboto';
`
