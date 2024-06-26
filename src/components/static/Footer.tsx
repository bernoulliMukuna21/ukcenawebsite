import { COMPANY_NAME, CURRENT_YEAR } from '../../data/constants'
import { StyledFooter } from './style'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="left-side">&copy; {CURRENT_YEAR + ' ' + COMPANY_NAME}. All Right Reserved.</div>
      <div className="right-side">
        <ul>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Events</button>
          </li>
          <li>
            <button>Blog</button>
          </li>
          <li>
            <button>Join</button>
          </li>
        </ul>
      </div>
    </StyledFooter>
  )
}
export default Footer
