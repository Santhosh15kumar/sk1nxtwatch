import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {Component} from 'react'
import {
  LabelInput,
  InputElement,
  FormContainer,
  ImageElement,
  VisibilityContainer,
  VisibilityCheck,
  LabelShowPassword,
  ButtonElement,
  ErrorMsgElement,
} from './styledComponents'
import './index.css'

class LoginForm extends Component {
  state = {
    name: '',
    password: '',
    showErrorMsg: '',
    errorMsg: '',
    visibility: false,
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({
        visibility: true,
      })
    } else {
      this.setState({
        visibility: false,
      })
    }
  }

  onChangeUsername = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {name, visibility} = this.state
    return (
      <LabelInput>
        <label htmlFor="username" className="label-element">
          USERNAME
        </label>
        <InputElement
          type={visibility ? 'text' : 'password'}
          placeholder="USERNAME"
          id="username"
          onChange={this.onChangeUsername}
          value={name}
        />
      </LabelInput>
    )
  }

  renderPasswordField = () => {
    const {password, visibility} = this.state
    return (
      <LabelInput>
        <label htmlFor="username" className="label-element">
          PASSWORD
        </label>
        <InputElement
          type={visibility ? 'text' : 'password'}
          placeholder="PASSWORD"
          onChange={this.onChangePassword}
          value={password}
        />
      </LabelInput>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <FormContainer submit={this.onSubmitForm}>
        <ImageElement
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        {this.renderUsernameField()}
        {this.renderPasswordField()}
        <VisibilityContainer>
          <VisibilityCheck type="checkbox" onChange={this.showPassword} />
          <LabelShowPassword>Show Password</LabelShowPassword>
        </VisibilityContainer>
        <ButtonElement type="submit">Login</ButtonElement>
        {showErrorMsg && <ErrorMsgElement>*{errorMsg}</ErrorMsgElement>}
      </FormContainer>
    )
  }
}

export default LoginForm
