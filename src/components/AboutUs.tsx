import { StyledAboutUsDiv } from './style'
import UKCENAGROUPPHOTO from '../assets/uk-cena-group-photo-3.jpg'

const AboutUs = () => {
  return (
    <StyledAboutUsDiv>
      <section>
        <img src={UKCENAGROUPPHOTO} alt="uk-cena-group" />
      </section>
      <section>
        <h1>Who We Are</h1>
        <section>
          <p>We are the fearless STEM warriors of Congo, on a mission to ignite the flames of curiosity in young minds.</p>
          <p>Our journey is filled with explosions of knowledge, experiments that defy gravity, and equations that make your brain do backflips.</p>
          <p>Join us in the quest to conquer the universe, one scientific breakthrough at a time!</p>
        </section>
      </section>
    </StyledAboutUsDiv>
  )
}

export default AboutUs
