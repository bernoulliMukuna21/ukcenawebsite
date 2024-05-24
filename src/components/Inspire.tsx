import { Link } from "react-router-dom"
import { theme } from "../App"
import GeneralButton from "./GeneralButton"
import { StyledInspireDiv } from "./style"
import { COMPANY_NAME } from "../data/constants"

const Inspire = () => {
  return(
    <StyledInspireDiv>
      <section className="first-section">
        <h1 id="inspire-section-title">Some Statistics</h1>
        <p>Some of our most outstanding acheivements so far</p>
      </section>
      <section className="second-section">
        <ul>
          <li>
            <h1>5+</h1><h1>Innovations Sparked</h1>
          </li>
          <li>
            <h1>100+</h1><h1>Membership Strengths</h1>
          </li>
          <li>
            <h1>10+</h1><h1>Conferences Held</h1>
          </li>
        </ul>
      </section>
      <section className="third-section">
        <h1>Join Our STEM<br/>Revolution Today!</h1>
        <p>Discover the Exciting World of STEM with {COMPANY_NAME}</p>
        <section>
          <GeneralButton
            title='Start Your Journey'
            backgroundcolor={theme.color.blue}
            fontsize='2'
            idName='start-your-journey'
          />
          <Link to='/team'>
            <GeneralButton
              title='Learn More'
              backgroundcolor={theme.color.green}
              fontsize='2'
            />
          </Link>
        </section>
      </section>
    </StyledInspireDiv>
  )
}

export default Inspire