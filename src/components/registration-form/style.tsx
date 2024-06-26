import styled from 'styled-components'

export const StyledRegistrationForm = styled.form`
  min-height: calc(100vh - ${(props) => props.theme.heights.heightOfFooter});
  border: 0.1rem solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .registration-form-body {
    margin: 5rem;
  }

  .registration-form-button-nav button {
    width: 10rem;
  }

  .registration-form-button-nav button:first-child {
    margin-right: 2rem;
  }
  .registration-form-button-nav button:last-child {
    margin-left: 2rem;
  }
`

export const StyledPersonalInformation = styled.div``

export const StyledProfessionalAndAcademic = styled.div``

export const StyledGeneralQuestions = styled.div``

export const StyledAboutYou = styled.div``

export const StyledFinalStatement = styled.div``
