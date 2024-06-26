import * as yup from 'yup'

const emailMatcher = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i

export const signupSchema = yup.object().shape({
  fullname: yup.string().min(5, 'Must be at least 5 letters'),
  email: yup.string().email('Field must be an email').matches(emailMatcher, 'Invalid Email'),
})
