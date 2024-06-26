import AboutUs from '../AboutUs'
import ConnectWithUs from '../ConnectWithUS'
import Empower from '../Empower'
import Inspire from '../Inspire'
import StemProfessions from '../StemProfessions'
import { StyledHome } from './style'

const Home = () => {
  return (
    <StyledHome>
      <div className="section-stem-professions">
        <StemProfessions />
      </div>
      <div className="section-who-we-are">
        <AboutUs />
      </div>
      <div className="section-inspire">
        <Inspire />
      </div>
      <div className="section-empower">
        <Empower />
      </div>
      <div className="section-connect-with-us">
        <ConnectWithUs />
      </div>
    </StyledHome>
  )
}

export default Home
