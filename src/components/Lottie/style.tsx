import styled from 'styled-components'

export const SyledCompletedLottie = styled.div`
  text-align: center;
  .sign-up-success-lottie-page-top h1 {
    color: ${(props) => props.theme.color.green};
    padding-bottom: 1.5rem;
  }

  .sign-up-success-lottie-page-top > p,
  .sign-up-success-lottie-page-bottom > p {
    font-size: 1.5rem;
    line-height: 0.75;
  }

  .sign-up-success-lottie-page-top > p:last-child {
    font-size: 1.3rem;
    font-style: italic;
    opacity: 0.5;
  }

  .sign-up-success-lottie-page-top .sign-up-email-message span {
    color: ${(props) => props.theme.color.blue};
    font-weight: bold;
    font-style: italic;
  }
`
