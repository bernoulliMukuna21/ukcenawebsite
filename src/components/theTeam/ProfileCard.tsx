import { StyledProfileCard } from './style'

type TProfileCard = {
  name: string
  image: any
  position: string
}

const ProfileCard = ({ name, image, position }: TProfileCard) => {
  return (
    <StyledProfileCard>
      <section>
        <img src={image} alt={name} />
      </section>
      <section>{name}</section>
      <section>{position}</section>
    </StyledProfileCard>
  )
}

export default ProfileCard
