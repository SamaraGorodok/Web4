import styled from "styled-components";
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  @media  (max-width: 768px){
    overflow: hidden;
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
      flex:70%;
      display: flex;
      justify-content: flex-start;
      padding-right: 5%;
      position: relative;
      //@media  (max-width: 768px){
      //  overflow: hidden;
      //  flex-direction: column;
      //} 
  %    
`

export const RightContainer = styled.div`
      flex:30%;
      display: flex;
      justify-content: flex-end;
      padding-right: 50px;
  //    @media  (max-width: 768px){
  //       overflow: hidden;
  //        flex-direction: column;
  //}

`

export const HeaderInnerContainer=styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  //@media  (max-width: 768px){
  //  overflow: hidden;
  //  flex-direction: column;
  //}
`;

export const HeaderLinkContainer = styled.div`
    display: flex;
    
`
export const HeaderLink = styled(Link)`
  
  color:whitesmoke;
  font-size: x-large;
  font-family: Arial,Helvetica,sans-serif;
  text-decoration: none;
  
  margin: 25px;
  @media (max-width: 700px){
    overflow: hidden;
    flex-direction: column;
  }
`

export const HeaderExtendedContainer=styled.div``;