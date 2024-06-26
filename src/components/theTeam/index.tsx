import ProfileCard from './ProfileCard'
import { StyledTheTeam } from './style'
import Jires_Massamba from '../../assets/Jires_Massamba.jpeg'
import Kasai_Mbo from '../../assets/Kasai_Mbo.jpeg'
import Joel_Tamina from '../../assets/Joel_Tamina.jpeg'
import Anthony_Kitenge from '../../assets/Anthony_Kitenge.jpeg'
import Marlene_Fumany from '../../assets/Marlene_Fumany.jpeg'
import Joseph_Bonkoto from '../../assets/Joseph_Bonkoto.jpeg'
import Sandrine_Molanza from '../../assets/Sandrine_Molanza.jpeg'
import Patrick_Mbaya from '../../assets/Patrick_Mbaya.jpeg'
import Eric_Bukasa from '../../assets/Eric_Bukasa.jpeg'
import Bernoulli_Mukuna from '../../assets/Bernoulli_Mukuna.jpg'
import Maria_Do_Rosario_Zau from '../../assets/Maria_Do_Rosario_Zau.jpeg'
import Mike_Loleke from '../../assets/Mike_Loleke.jpeg'
import Mike_Ditutula from '../../assets/Mike_Ditutula.jpeg'
import Christian_Maheshe from '../../assets/Christian_Maheshe.jpeg'

import vivian from '../../assets/Vivian.jpeg'

const team = [
  { name: 'Jires Massamba', image: Jires_Massamba, position: 'President' },
  { name: 'Kasai Mbo', image: Kasai_Mbo, position: 'General Secretary' },
  { name: 'Joel Tamina', image: Joel_Tamina, position: 'Finance Lead & Treasurer' },
  { name: 'Anthony Kitenge', image: Anthony_Kitenge, position: 'Development & Operations Lead' },
  { name: 'Marlene Fumany', image: Marlene_Fumany, position: 'Operations & Strategic Lead' },
  { name: 'Joseph Bonkoto', image: Joseph_Bonkoto, position: 'Workshop & Finance Lead' },
  { name: 'Sandrine Molanza', image: Sandrine_Molanza, position: 'Marketing and Media Lead' },
  { name: 'Patrick Mbaya', image: Patrick_Mbaya, position: 'Project Coordinator' },
  { name: 'Eric Bukasa', image: Eric_Bukasa, position: 'Programs & Events Coordinator' },
  { name: 'Bernoulli Mukuna', image: Bernoulli_Mukuna, position: 'Web Designer' },
  { name: 'Christian Maheshe', image: Christian_Maheshe, position: 'Ambassador' },
  { name: 'Maria Do Rosario Zau', image: Maria_Do_Rosario_Zau, position: 'Ambassador' },
  { name: 'Mike Loleke', image: Mike_Loleke, position: 'Ambassador' },
  { name: 'Vivian', image: vivian, position: 'Ambassador' },
  { name: 'Mike Ditutula', image: Mike_Ditutula, position: 'Ambassador' },
]

const TheTeam = () => {
  return (
    <StyledTheTeam>
      <div className="theteam-header">
        <h1>Our Ever Growing Team</h1>
        <p>
          We are a group of STEM professional of Congolese background. Our goal is to bring innovative ideas for the growth of our nation and inspire
          the next generation.
        </p>
      </div>
      <div className="theteam-body">
        {team.map((teamMember, i) => (
          <ProfileCard key={i} name={teamMember.name} image={teamMember.image} position={teamMember.position} />
        ))}
      </div>
    </StyledTheTeam>
  )
}

export default TheTeam
