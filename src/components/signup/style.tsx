import styled from 'styled-components'

export const StyledSignUp = styled.div`
  padding: 5rem 10rem;
  width: 75rem;
  min-height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .signup-form {
    display: flex;
    flex-direction: column;
  }

  .form-title {
    margin-bottom: 5rem;
    text-align: center;
  }

  .form-title h1 {
    font-size: 3rem;
  }
  .form-title span {
    font-size: 1.5rem;
    font-style: italic;
  }

  .form-fields-container {
    margin: 3rem 0;
  }

  .form-fields-container section {
    margin-bottom: 2rem;
  }

  .form-fields-container section input {
    border: 0.1rem solid black;
    width: 100%;
    padding: 2rem;
    border-radius: 2rem;
    font-size: 1.5rem;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.color.blue};
    }
  }

  .form-fields-container section .input-error {
    border-color: red;
  }
`
