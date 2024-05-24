import styled from "styled-components";

type ButtonPropsType = {
  backgroundcolor: string
  fontSize: string
}

export const StyledGeneralButton = styled.button<ButtonPropsType>`
  color: white;
  background-color: ${props => props.backgroundcolor};
  padding: 1.5rem 2.5rem;
  border-radius: 2rem;
  font-size: ${props => props.fontSize}rem;
  font-weight: bold;

  &:hover {
    opacity: .85;
  }
`

export const StyledStemProfessionsDiv = styled.div`
  height: ${props => props.theme.heightOfcrossFadeImages};

  img {
    display: block;
    position: absolute;
    margin: 0;
    height: inherit;
    min-width: 100%;
    object-fit: cover;
    z-index: 1;
  }

  >.get-started {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: white;
    z-index: 2;
    height: inherit;
    width: 100%;
    padding-bottom: 5rem;
  }

  .get-started h1, .get-started p, .get-started button {
    text-shadow: .1rem .1rem black;
  }
  
  .get-started h1 {
    font-size: 5rem;
  }

  .get-started p {
    font-size: 2.5rem;
    margin: 2rem 0 7rem 0;
  }

  .get-started button {
    border: .1rem solid white;
    box-shadow: .2rem .2rem;

    &:hover {
      text-shadow: none;
      box-shadow: none;
      border-color: ${props => props.theme.color.blue};
      background-color: ${props => props.theme.color.blue};
    }
  }
`

export const StyledAboutUsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  font-size: 2rem;
  background-color: white;

  img {
    display: block;
    height: 50vh;
    width: 70vh;
    object-fit: cover;
    border-radius: 2rem;
  }

  >section:first-child {
    margin-right: 3rem;
  }
   
  >section:last-child {
    margin-left: 3rem;
    width: 35%;
  }
  >section:last-child h1{
    font-size: 7rem;
  }
  >section:last-child p{
    margin: 2rem;
  }
`

export const StyledInspireDiv = styled.div`
  text-align: center;
  background-color: white;
  padding-top: 5rem;
  font-size: 2rem;

  .first-section h1 {
    font-size: 4rem;
  }

  .second-section {
    margin: 4rem 0;
  }

  .second-section ul {
    display: flex;
    justify-content: space-around;
  }

  .second-section ul li h1, .third-section h1{
    font-size: 5rem;
    font-weight: bolder;
  }

  .second-section ul li h1:first-child{
    color: ${props => props.theme.color.blue};
  }

  .third-section {
    background-color: #f7d4fb;
    padding: 5rem 0;
  }

  .third-section h1{
    font-size: 7.5rem;
    font-weight: bolder;
  }

  .third-section>p{
    margin: 3rem 0;
  }

  .third-section>section button{
    padding: 2.5rem 5rem;
    margin: 0 2rem;
    border-radius: 5rem;
  }
`

export const StyledEmpowerDiv = styled.div`
  background-color: #FEF5FF;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  .first-section {
    background-color: white;
    border-radius: 3rem;
    padding: 5rem;
    margin: 0 20%;
  }

  .first-section h1 {
    margin-bottom: 5rem;
    font-size: 4rem;
  }
`

export const StyledConnectWithUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  background-color: white;

  h1 {
    font-size: 4rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100vh;
  }

  form input, form textarea {
    padding: 2rem;
    border-radius: 3rem;
    border: .1rem solid gray;
    box-sizing: border-box;
    font-family: 'source serif 4';
    font-size: 1.75rem;
    width: 100%;

    &:focus{
      outline: none;
      border-color: ${props => props.theme.color.blue};
    }
  }

  form textarea {
    resize: vertical;
  }

  .form-fields-container {
    margin: 4rem 0;
  }

  .first-section {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
  }

  .first-section section{
    width: 100%;
  }

  .first-section section:first-child{
    margin-right: 1.5rem;
  }
  .first-section section:last-child{
    margin-left: 1.5rem;
  }

  .second-section {
    margin-top: 2rem;
  }


  button {
    width: 50%;
    align-self: center;
  }

  .input-error {
    border-color: ${props => props.theme.color.red};
  }

  section>p {
    text-align: center;
    color: ${props => props.theme.color.red};
    margin-top: 1rem;
  }

  .connect-with-us-body {
    border: .1rem solid black;
  }
`