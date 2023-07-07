import styled from 'styled-components'

export const ErrorImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const ErrImg = styled.img`
  width: ${props => props.width};
`
export const ErrHeading = styled.h2`
  color: ${props => props.color};
`

export const Para = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  text-align: center;
`

export const ButtonEl = styled.button`
  background-color: #4f46e5;
  font-family: 'Roboto';
  color: white;
  padding: 10px;
  border-radius: 5px;
`
