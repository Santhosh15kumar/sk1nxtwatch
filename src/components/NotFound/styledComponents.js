import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageEl = styled.img`
   width=${props => props.width}
`

export const Heading = styled.h1`
  color: #313131;
  font-family: 'Roboto';
  font-weight: bold;
`
export const Para = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  text-align: center;
`
