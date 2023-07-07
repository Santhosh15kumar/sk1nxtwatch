import {
  ErrorImageContainer,
  ErrImg,
  ErrHeading,
  Para,
  ButtonEl,
} from './styledComponents'

const ErrorImage = props => {
  const {refresh} = props

  const onRefreshPage = () => {
    refresh()
  }

  return (
    <ErrorImageContainer>
      <ErrImg
        width="40%"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <ErrHeading color=" #0f0f0f">Oops! Something Went Wrong</ErrHeading>
      <Para color="#1e293b">
        We are having some trouble to complete your request. Please try again
      </Para>
      <ButtonEl onClick={onRefreshPage}>Retry</ButtonEl>
    </ErrorImageContainer>
  )
}

export default ErrorImage
