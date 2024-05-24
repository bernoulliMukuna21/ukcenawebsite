import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5rem;
  margin: 1rem 20rem;
  padding: 1rem 2rem;
  overflow: hidden;
  background-color:rgba(255, 255, 255, 0.65);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;


  .left-side a, .middle-side ul, .right-side {
    display: flex;
    align-items: center;
  }

  h1:hover {
    text-decoration: underline;
  }

  img {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
  }

  ul li button, ul li a{
    padding: 2rem;
    margin: 0 1rem;
    font-size: 1.75rem;
  }

  ul li button:hover, ul li a:hover{
    background-color: rgba(235, 234, 234, 0.65);
    border-radius: 2rem;
  }
`

export const StyledHome = styled.main`
  >div {
  }

  div.section-stem-professions {
    height: ${props => props.theme.heightOfcrossFadeImages};
  }
`

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 5rem 20rem;
  font-size: 2rem;
  font-weight: bold;

  .right-side ul {
    display: flex;
  }

  ul li button{
    padding: 1rem;
    margin: 0 1rem;
  }
  ul li button:hover{
    text-decoration: underline;
  }
`