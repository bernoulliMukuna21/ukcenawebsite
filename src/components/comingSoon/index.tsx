import { StyledComingSoon } from './style'
import LockedLottie from '../../data/locked-lottie.json'
import { useLottie } from 'lottie-react'

const ComingSoon = () => {
  const style = {
    height: 250,
    paddingTop: '2rem',
    paddingBottom: '2rem',
  }

  const options = {
    animationData: LockedLottie,
    loop: true,
  }
  const { View } = useLottie(options, style)

  return (
    <StyledComingSoon>
      <h1 style={{ textAlign: 'center' }}>Coming Soon...</h1>
      {View}
    </StyledComingSoon>
  )
}

export default ComingSoon
