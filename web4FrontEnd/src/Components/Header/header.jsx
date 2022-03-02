import React from "react";
import {
    HeaderContainer,
    HeaderExtendedContainer,
    HeaderInnerContainer,
    HeaderLinkContainer,
    LeftContainer,
    RightContainer,
    HeaderLink
} from './Header.style'
import {Navigate} from "react-router-dom";
import ArrayValues from "../../Store/ArrayValues";


const Header = () =>{
    const logOut = () => {
        localStorage.clear()
        console.log(localStorage)
        ArrayValues.values=[{id: ' ', x: ' ', y: ' ', r: ' ', inArea: " ", workTime: "please Log in"}]
    }
    // const isPrivate = () => {
    //     if (!localStorage.getItem("secret")){
    //         return (
    //             <Navigate to={"/"}></Navigate>
    //         )
    //     }
    // }
    return (
        <HeaderContainer>
            <HeaderInnerContainer>
                <LeftContainer>
                    <HeaderLinkContainer>
                        <HeaderLink  to="/"><div onClick={logOut}>Home</div></HeaderLink>
                        <HeaderLink to="/main">Main</HeaderLink>
                        <HeaderLink to="/About">About</HeaderLink>
                    </HeaderLinkContainer>
                </LeftContainer>
                <RightContainer>

                </RightContainer>
            </HeaderInnerContainer>
            <HeaderExtendedContainer/>
        </HeaderContainer>
    )

}
export default Header