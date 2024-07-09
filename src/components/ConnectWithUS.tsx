import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useFormik } from 'formik'
import { StyledConnectWithUs } from './style'
import GeneralButton from './GeneralButton'
import { theme } from '../App'
import { connetWithUsSchema } from '../schemas/connectWithUs.schema'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import FormMessage from './form/FormMessage'

const ConnectWithUs = () => {
  const [messageSuccessfullySent, setMessageSuccessfullySent] = useState('')

  useEffect(() => {
    if (messageSuccessfullySent.length !== 0) {
      setTimeout(function () {
        setMessageSuccessfullySent('')
      }, 2000);
    }
  }, [messageSuccessfullySent]);

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: connetWithUsSchema,
    onSubmit: (values, actions) => {
      try{
        emailjs.send('service_8c8pocp', 'template_hxv6g1b', values, '37pgYMtVq-I8CzEBU')
        setMessageSuccessfullySent('We have received your message, Thank you!')
        actions.resetForm()
      } catch(error: any){
        alert(error)
      }
    },
  })

  return (
    <StyledConnectWithUs>
      <h1>Get in Touch</h1>
      <div className='connect-with-us-body'>
        <form className='email-connect' onSubmit={handleSubmit} autoComplete='off'>
          <div className='form-fields-container'>
            <div className='first-section'>
              <section>
                <input 
                
                  id='name'
                  name='name'
                  value={values.name}
                  placeholder='Name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type='text'
                  className={`${errors.name && touched.name ? 'input-error' : ''} first-input`}                />
                {/* {errors.name && touched.name && <p className='error'>{errors.name}</p>} */}
                <FormMessage
                  message = { errors.name || '' }
                  visibility = {errors.name && touched.name ? 'visible' : 'hidden'}
                  type='error'
                />
              </section>
              <section>
                <input
                  id='email'
                  name='email'
                  value={values.email}
                  placeholder='Email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type='email'
                  className={errors.email && touched.email ? 'input-error' : ''}
                />
                {/* {errors.email && touched.email && <p className='error'>{errors.email}</p>} */}
                <FormMessage
                  message = { errors.email || '' }
                  visibility = {errors.email && touched.email ? 'visible' : 'hidden'}
                  type='error'
                />
              </section>
            </div>
            <div className='second-section'>
              <section>
                <textarea
                  id = 'message'
                  value = {values.message}
                  name = 'message'
                  placeholder = 'Please type your message'
                  onChange = { handleChange }
                  onBlur={ handleBlur }
                  className={ errors.message && touched.message ? 'input-error' : '' }
                />
                {/* {errors.message && touched.message && <p className='error'>{errors.message}</p>} */}
                <FormMessage
                  message = { errors.message || '' }
                  visibility = {errors.message && touched.message ? 'visible' : 'hidden'}
                  type='error'
                />
              </section>
            </div>
          </div>
          <div className='connect-form-bottom'>
            <FormMessage
              message = { messageSuccessfullySent }
              visibility = 'visible'
              type = 'success'
            />
            <GeneralButton title='Send Message' buttonType='submit' fontsize='2' backgroundcolor={theme.color.blue} buttonDisabled={isSubmitting} />
          </div>
        </form>
        <div className='other-connect-types'>
          <div className='phone-connect'>
            <h1>Phone</h1>
            <p>+447438 894372</p>
          </div>
          <div className='email-address-connect'>
            <h1>Email Address</h1>
            <p>admin@ukcena.org</p>
          </div>
          <div className='location-address-connect'>
            <h1>Location Address</h1>
            <p>United Kingdom</p>
          </div>
          <div className='social-media-connect'>
            <h1>Social Media</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faFacebook as IconProp} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram as IconProp} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin as IconProp} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledConnectWithUs>
  )
}

export default ConnectWithUs
