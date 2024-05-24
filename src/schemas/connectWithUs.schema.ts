import * as yup from 'yup'

const emailMatcher = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i

export const connetWithUsSchema = yup.object().shape({
  name: yup.string().min(5, 'Must be at least 5 letters'),
  email: yup.string().matches(emailMatcher, 'Invalid Email'),
  message: yup
    .string()
    .min(40, 'Message must be at least 40 characters')
    .max(2000, 'Message exceed maximum characters allowe'),
})