import styled from 'styled-components'

export const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputElement = styled.input`
  color: #475569;
  font-family: 'Roboto';
  border-color: #475569;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5%;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px 5px #c6c9cc;
  margin: 20%;
  padding: 20px;
`
export const ImageElement = styled.img`
  width: 30%;
  margin-bottom: 10%;
`

export const VisibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10%;
`
export const VisibilityCheck = styled.input`
  cursor: pointer;
`

export const LabelShowPassword = styled.p`
  font-family: 'Roboto';
  color: black;
`

export const ButtonElement = styled.button`
  color: white;
  background-color: #3b82f6;
  border-radius: 5px;
  width: auto;
`

export const ErrorMsgElement = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: 14px;
`
