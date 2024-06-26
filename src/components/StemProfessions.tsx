import { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { StyledStemProfessionsDiv } from './style'
import backgroundImage1 from '../assets/backgroundImage1.jpg'
import backgroundImage2 from '../assets/backgroundImage2.jpg'
import backgroundImage3 from '../assets/backgroundImage3.jpg'
import backgroundImage4 from '../assets/backgroundImage4.jpg'
import JoinUsButton from './GeneralButton'
import { COMPANY_NAME } from '../data/constants'

const allBackGroundImages = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4]

const StemProfessions = () => {
  const firstImageToShow = Math.floor(Math.random() * 4)
  const [currentImage, setCurrentImage] = useState<number>(firstImageToShow)
  const transitions = useTransition(allBackGroundImages[currentImage], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
  })

  useEffect(() => {
    const interval = setInterval(() => setCurrentImage((state) => (state + 1) % 4), 5000)
    return () => clearInterval(interval)
  }, [currentImage])

  return (
    <StyledStemProfessionsDiv>
      {transitions((styles, item) => {
        return <animated.img style={styles} src={item} alt="" />
      })}
      <div className="get-started">
        <h1>{COMPANY_NAME}</h1>
        <p>
          Join the <i>Congolese</i> STEM Student Community and Unleash Your Inner Science Ninja!
        </p>
        <JoinUsButton title="Get Started" backgroundcolor="transparent" fontsize="2" classname="get-started" />
      </div>
    </StyledStemProfessionsDiv>
  )
}

export default StemProfessions
