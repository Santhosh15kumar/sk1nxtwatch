import styled from 'styled-components'

export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2%;
  margin-left: 1%;
  margin-right: 1%;
`

export const ImageEl = styled.img`
  width: ${props => props.width};
`

export const NavLgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2%;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavSmContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
