import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
`

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
`
export const InputEl = styled.input`
  color: #475569;
  font-family: 'Roboto';
`
export const ButtonEl = styled.button`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  padding: ${props => props.padding};
  border-radius: ${props => props.radius};
  font-family: 'Roboto';
  cursor: pointer;
`
export const NoResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const NoResImg = styled.img`
  width: ${props => props.width};
`
export const NoResHeading = styled.h2`
  color: ${props => props.color};
`

export const Para = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  text-align: center;
`
export const VideosList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`
