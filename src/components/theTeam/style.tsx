import styled from 'styled-components'

export const StyledTheTeam = styled.div`
  min-height: calc(100vh - ${(props) => props.theme.heights.heightOfFooter});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15rem;
  font-size: 1.5rem;
  text-align: center;

  .theteam-header h1 {
    font-size: 4rem;
  }
  .theteam-header p {
    opacity: 0.5;
    font-style: italic;
  }

  .theteam-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem 15rem;
    margin: 8rem 15rem 10rem 15rem;
  }
`

export const StyledProfileCard = styled.div`
  img {
    object-fit: cover;
    height: 25rem;
    width: 23rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
    border-radius: 1rem;
  }

  section:nth-child(2) {
    margin: 1rem;
  }

  section:last-child {
    font-weight: bold;
  }
`
