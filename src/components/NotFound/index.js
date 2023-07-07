import {NotFoundContainer, ImageEl, Heading, Para} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <ImageEl
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
      width="30%"
    />
    <Heading>Page Not Found</Heading>
    <Para>we are sorry, the page you requested could not be found.</Para>
  </NotFoundContainer>
)

export default NotFound
