import { useFormik } from 'formik'
import { StyledSignUp } from './style'
import GeneralButton from '../GeneralButton'
import { AppGlobalContext, theme } from '../../App'
import { COMPANY_NAME } from '../../data/constants'
import { signupSchema } from '../../schemas/signupSchema'
import CompletedLottie from '../Lottie/completed'
import { useContext, useState } from 'react'
import ComingSoon from '../comingSoon'

const SignUp = () => {
  const appContext = useContext(AppGlobalContext)

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      fullname: '',
      email: '',
    },
    validationSchema: signupSchema,
    onSubmit: (values, actions) => {
      console.log('Values: ', values)
      console.log('actions: ', actions)
      setIsSubmitSuccessful(true)
      //actions.resetForm()
    },
  })

  return (
    <StyledSignUp>
      {!appContext.signupCompleted ? (
        <ComingSoon />
      ) : (
        <>
          {!isSubmitSuccessful && (
            <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-title">
                <h1>Let's fill this in... ✍📝</h1>
                <span style={{ opacity: 0.5 }}>In order to kick off your journey with {COMPANY_NAME}, please complete the form below</span>
              </div>
              <div className="form-fields-container">
                <section>
                  <input
                    id="fullname"
                    value={values.fullname}
                    placeholder="Full Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className={errors.fullname && touched.fullname ? 'input-error' : ''}
                  />
                  {errors.fullname && touched.fullname && <p className="error">{errors.fullname}</p>}
                </section>
                <section>
                  <input
                    id="email"
                    value={values.email}
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    className={errors.email && touched.email ? 'input-error' : ''}
                  />
                  {errors.email && touched.email && <p className="error">{errors.email}</p>}
                </section>
              </div>
              <GeneralButton title="Join" buttonType="submit" fontsize="2" backgroundcolor={theme.color.blue} buttonDisabled={isSubmitting} />
            </form>
          )}
          {isSubmitSuccessful && <CompletedLottie />}
        </>
      )}
    </StyledSignUp>
  )
}

export default SignUp
