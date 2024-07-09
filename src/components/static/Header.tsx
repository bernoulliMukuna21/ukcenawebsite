import { StyledHeader } from './style';
import logo from '../../assets/uk-cena-logo-nobckg.png';
import JoinUsButton from '../GeneralButton';
import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../data/constants';
import { theme } from '../../App';
import Modal from '../modal';
import { useState } from 'react';
import SignUp from '../signup';
import { IoMdMenu ,  IoMdClose } from "react-icons/io"
import { VscDebugDisconnect } from "react-icons/vsc";
import { SiGotomeeting } from "react-icons/si";
import { FaSuperpowers } from "react-icons/fa6";
import { LiaHandsHelpingSolid } from "react-icons/lia";




const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(prev => !prev);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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
            <li><button>Inspire</button></li>
            <li><button>Empower</button></li>
            <li><button>Connect</button></li>
            <li><Link to="/team">Meet Us</Link></li>
          </ul>
        </div>
        <div className="right-side">
          <JoinUsButton
            title="Join Us"
            backgroundcolor={theme.color.blue}
            fontsize="1.5rem"
            onClickBehaviour={toggleModal}
          />
         
        </div>
        <div className='menu' >
        <p className="paramenu" onClick={toggleMenu}>
        {menuVisible ? <IoMdClose size={40}/>: <IoMdMenu  size={40}/>}
      </p> 
            {menuVisible &&<div className='menu2' >
              
              <ul> 
            <li><FaSuperpowers size={30}/><button>Inspire</button></li>
            <li><LiaHandsHelpingSolid size={30}/><button>Empower</button></li>
            <li> <VscDebugDisconnect size={30}/><button>Connect</button></li>
            <li><Link to="/team"><SiGotomeeting size={20}/><button>Meet Us</button></Link></li>

          </ul>
              
              </div>}

        </div>
        
      </StyledHeader>
      {openModal && <Modal handleClose={toggleModal} text={<SignUp />} />}

      
    </>
  );
}

export default Header;
