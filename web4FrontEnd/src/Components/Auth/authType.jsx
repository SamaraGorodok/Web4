import React, {useState} from "react";
import {NavLink} from "react-router-dom";


const TypeAuth = (props) => {

    return(
        <div>
            <NavLink to={"/signup"}>signup</NavLink>
            <br/>
            <NavLink to={"/login"}>login</NavLink>
        </div>
    )


}
export default TypeAuth
