import { createContext, useState } from 'react'
import AboutYou from './AboutYou'
import FinalStatement from './FinalStatement'
import GeneralQuestions from './GeneralQuestions'
import PersonalInformation from './PersonalInformation'
import ProfessionalAndAcademic from './ProfessionalAndAcademic'
import { StyledRegistrationForm } from './style'
import GeneralButton from '../GeneralButton'
import { theme } from '../../App'
import { useFormik } from 'formik'

const RegistrationFormContext = createContext<any>(null)
const FORM_NAVIGATION_DIRECTION = {
  FORWARD: 'forward',
  BACKWARD: 'backward',
}

const RegistrationForm = () => {
  const [componentToDisplayPosition, setComponentToDisplayPosition] = useState<number>(0)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
    },
    validationSchema: 'connetWithUsSchema',
    onSubmit: (values, actions) => {
      console.log('Values: ', values)
      console.log('actions: ', actions)
      //actions.resetForm()
    },
  })

  const registrationFormContents = [
    { title: 'Personal Info', component: <PersonalInformation /> },
    { title: 'Academical & professional Background', component: <ProfessionalAndAcademic /> },
    { title: 'Important Questionnaires', component: <GeneralQuestions /> },
    { title: 'Profile Statement', component: <AboutYou /> },
    { title: 'Signature Agreement', component: <FinalStatement /> },
  ]

  const numberOfRegistrationComponents = registrationFormContents.length
  const componentPosition = componentToDisplayPosition + 1

  const navigateRegistrationComponents = (direction: string) => {
    if (direction === FORM_NAVIGATION_DIRECTION.FORWARD) {
      setComponentToDisplayPosition((state) => (state + 1) % numberOfRegistrationComponents)
    } else if (direction === FORM_NAVIGATION_DIRECTION.BACKWARD) {
      setComponentToDisplayPosition((state) => (state - 1) % numberOfRegistrationComponents)
    }
  }

  return (
    <RegistrationFormContext.Provider value={{ setComponentToDisplayPosition }}>
      <StyledRegistrationForm>
        <div className="registration-form-header">
          <h1>{registrationFormContents[componentToDisplayPosition].title}</h1>
          <span>
            {componentPosition}/{numberOfRegistrationComponents}
          </span>
        </div>
        <div className="registration-form-body">{registrationFormContents[componentToDisplayPosition].component}</div>
        <div className="registration-form-button-nav">
          {componentPosition !== 1 && (
            <GeneralButton
              title="Previous"
              fontsize="1.3rem"
              backgroundcolor="#f088fb"
              onClickBehaviour={() => navigateRegistrationComponents(FORM_NAVIGATION_DIRECTION.BACKWARD)}
            />
          )}
          {componentPosition !== 5 && (
            <GeneralButton
              title="Next"
              fontsize="1.3rem"
              backgroundcolor={theme.color.blue}
              onClickBehaviour={() => navigateRegistrationComponents(FORM_NAVIGATION_DIRECTION.FORWARD)}
            />
          )}
          {componentPosition === 5 && <GeneralButton title="submit" buttonType="submit" fontsize="1.3rem" backgroundcolor={theme.color.green} />}
        </div>
      </StyledRegistrationForm>
    </RegistrationFormContext.Provider>
  )
}

export default RegistrationForm
