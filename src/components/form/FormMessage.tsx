import { StyledFormMessageContainer } from "./style"

export type TFormMessage = {
  message: string
  type: 'success' | 'error'
  visibility: 'visible' | 'hidden'
}

const FormMessage = ({ message, type, visibility }: TFormMessage) => {
  return(
    <StyledFormMessageContainer visibility = { visibility } className = { type }>
      {message}
    </StyledFormMessageContainer>
  )
}

export default FormMessage
