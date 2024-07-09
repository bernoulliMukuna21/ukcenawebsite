import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5rem;
  margin: 1rem 20rem;
  padding: 1rem 2rem;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.65);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  .left-side a,
  .middle-side ul,
  .right-side {
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

  ul li button,
  ul li a {
    padding: 2rem;
    margin: 0 1rem;
    font-size: 1.75rem;
  }

  ul li button:hover,
  ul li a:hover {
    background-color: rgba(235, 234, 234, 0.65);
    border-radius: 2rem;
  }

  .menu {
    display: none;
  }

  @media (max-width: 800px) {
  
  .middle-side ul{
  margin-top:3rem;
 
  display:flex;
  flex-direction:column;
  
  }

    body{
    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;
     max-width: 800px;
    
    background-color: white;
    }
    .left-side,
    .middle-side,
    .right-side {
      display: none;
    }

     .menu {
    display: flex;
    width: 50%;
    height: 50%;
   
    
    position: fixed;
    top: 2px; 
    left: 1px; 
    z-index: 999;
  }
  .paramenu{
    color: white;
    margin-left:20px;
    margin-botton:20px;
   
    font-size: 16px;
   font-weight: bold;
  
  }

    .menu2{
    display: flex;
    width: 100%;
    
    min-height: 80vh;
   background-color: rgba(255, 255, 240, 0.7);
  
    box-shadow: 2px 0 5px rgba(0,0,0,0.5);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    transition: opacity 0.8s ease-in-out; 
    position: fixed; 
    
    z-index: -999; 
  }
    .menu2 ul {
   
   
    margin-top:5rem;
    display: block;
    }

    .menu ul li{
    margin:none;
 
    
    }


    .menu2 ul li:nth-child(1),
    .menu2 ul li:nth-child(2),
    .menu2 ul li:nth-child(3) {
   
    margin-left:2.7rem;
}



    

   img {
   display: none; 
  }
  
    }

   
`;

export const StyledHome = styled.main`
  > div {
  }

  div.section-stem-professions {
    height: ${(props) => props.theme.heightOfcrossFadeImages};
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  height: ${(props) => props.theme.heights.heightOfFooter};
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;

  .right-side ul {
    display: flex;
  }

  ul li button {
    padding: 1rem;
    margin: 0 1rem;
  }

  ul li button:hover {
    text-decoration: underline;
  }

 @media (max-width: 800px) {
  
   

     
   
    }


`;
