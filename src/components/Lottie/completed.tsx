import React from 'react'
import { useLottie } from 'lottie-react'
import completedAnimation from '../../data/success-lottie.json'
import { SyledCompletedLottie } from './style'
import { COMPANY_NAME } from '../../data/constants'

const CompletedLottie = () => {
  const style = {
    height: 250,
    paddingTop: '2rem',
    paddingBottom: '2rem',
  }

  const options = {
    animationData: completedAnimation,
    loop: true,
  }

  const { View } = useLottie(options, style)

  return (
    <SyledCompletedLottie>
      <div className="lottie-complete-top">
        <div className="sign-up-success-lottie-page-top">
          <h1>Successful</h1>
          <p className="sign-up-email-message">
            {' '}
            An email has been sent to you on <span>mmbernoulli@gmail.com</span> with a form to complete{' '}
          </p>
          <br />
          <p>
            <i>Typed the wrong email address? Please click HERE to join with the correct email</i>
          </p>
        </div>
      </div>
      {View}
      <div className="lottie-complete-bottom">
        <div className="sign-up-success-lottie-page-bottom">
          <p> Welcome to {COMPANY_NAME}. We are glad to have you!</p>
        </div>
      </div>
    </SyledCompletedLottie>
  )
}

export default CompletedLottie
