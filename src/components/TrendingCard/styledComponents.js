import styled from 'styled-components'

export const TrendingItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4%;
  width: 60%;
  background-color: #f8fafc;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const ImageEl = styled.img`
  width: 60%;
  margin: 2%;
  @media screen and(min-width: 768px) {
    width: 100%;
  }
`

export const TrendingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Para = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size};
`
