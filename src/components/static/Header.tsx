import { StyledHeader } from './style'
import logo from '../../assets/uk-cena-logo-nobckg.png'
import JoinUsButton from '../GeneralButton'
import { Link } from 'react-router-dom'
import { COMPANY_NAME } from '../../data/constants'
import { theme } from '../../App'
import Modal from '../modal'
import { useState } from 'react'
import SignUp from '../signup'

const Header = () => {
  const [openModal, setOpenModal] = useState(false)
  const close = () => setOpenModal(false)
  const open = () => setOpenModal(true)

  return (
    <>
      <StyledHeader>
        <div className="left-side">
          <Link to="/">
            <img id="uk-cena-logo" src={logo} alt="uk-cena" />
            <h1>{COMPANY_NAME}</h1>
          </Link>
        </div>
        <div className="middle-side">
          <ul>
            <li>
              <button>Inspire</button>
            </li>
            <li>
              <button>Empower</button>
            </li>
            <li>
              <button>Connect</button>
            </li>
            <li>
              <Link to="/team">Meet Us</Link>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <JoinUsButton title="Join Us" backgroundcolor={theme.color.blue} fontsize="1.5" onClickBehaviour={() => (openModal ? close() : open())} />
        </div>
      </StyledHeader>
      {openModal && <Modal handleClose={close} text={<SignUp />} />}
    </>
  )
}

export default Header
