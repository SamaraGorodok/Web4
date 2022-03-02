import React from "react";
import Login from "./Login/login";
import Signup from "./SignUp/signUp";
import authType from "./authType"
import About from "../AboutPage/About"
import MainPage from "../MainPage/MainPage";
import {Component} from "react";
import {Navigate} from "react-router-dom";
export const routes = [
    {
        path: "/login",
        component: Login,
        isPrivate: false,
        logout: false
    },
    {
        path: "/signup",
        component: Signup,
        isPrivate: false,
        logout: false
    },
    {
        path: "/about",
        component: About,
        isPrivate: false,
        logout: false
    },
    {
        path: "/main",
        component: MainPage,
        isPrivate: false,
        logout: false
    },
    {
        path: "/",
        component: authType,
        isPrivate: false,
        logout: true
    },
    {
        path: "*",
        component: authType,
        isPrivate: false,
        logout: true
    },

]
// const logOut = () => {
//     const isLogout = localStorage.getItem("secret")
//     return(
//         (is)
//     )
//     localStorage.clear()
// }
export const AppRoute = ({component: Component,isPrivate,props}) =>{
    const  isAuth = localStorage.getItem("secret")
    return(
        (isPrivate && !isAuth) ? (<Navigate to="/"/>) : (<Component {...props}/>)
    )
}