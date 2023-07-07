import styled from 'styled-components'

export const VideoItemCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Para = styled.p`
  color= ${props => props.color};
  font-family:'Roboto';
  font-size: 14px;
`

export const VideoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const ResponsiveDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const IconsPara = styled.p`
  display: flex;
  color: ${props => props.color};
`

export const ChannelDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ImageEl = styled.img`
  width: 20%;
`
export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
`
