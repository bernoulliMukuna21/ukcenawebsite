import { useFormik } from "formik"
import { StyledConnectWithUs } from "./style"
import GeneralButton from "./GeneralButton"
import { theme } from "../App"
import { connetWithUsSchema } from "../schemas/connectWithUs.schema"

const ConnectWithUs = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: connetWithUsSchema,
    onSubmit: (values, actions) => {
      console.log('Values: ', values)
      console.log('actions: ', actions)
      //actions.resetForm()
    }
  })

  return(
    <StyledConnectWithUs>
      <h1>Get in Touch</h1>
      <div className="connect-with-us-body">
        <form className="email-connect" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-fields-container">
            <div className="first-section">
              <section>
                <input
                  id="name"
                  value={values.name}
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  className={errors.name && touched.name ? 'input-error': ''}
                />
                {errors.name && touched.name && <p className="error">{errors.name}</p>}
              </section>
              <section>
                <input
                  id="email"
                  value={values.email}
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  className={errors.email && touched.email ? 'input-error': ''}
                />
              {errors.email && touched.email && <p className="error">{errors.email}</p>}
              </section>
            </div>
            <div className="second-section">
              <section>
                <textarea
                  id="message"
                  value={values.message}
                  name="message"
                  placeholder="Please type your message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message && touched.message ? 'input-error': ''}
                />
              {errors.message && touched.message && <p className="error">{errors.message}</p>}
            </section>
            </div>
          </div>
          <GeneralButton
            title="Send Message"
            buttonType="submit"
            fontsize="2"
            backgroundcolor={theme.color.blue}
            buttonDisabled={isSubmitting}
          />
        </form>
        <div className="other-connect-types">
          <div className="phone-connect">
            Phone Connect
          </div>
          <div className="email-address-connect">
            Email Address Connect
          </div>
          <div className="location-address-connect">
            Location Address Connect
          </div>
          <div className="social-media-connect">
            Social Media Connect
          </div>
        </div>
      </div>
    </StyledConnectWithUs>
  )
}

export default ConnectWithUs