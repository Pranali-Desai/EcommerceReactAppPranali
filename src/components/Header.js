import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Nav";

const MainHeader = styled.header` `;

const Header = () => {
    return (
    <MainHeader>
        <NavLink to="/"> 
             <img src="./images/eshop-logo.jpg" style={{ width: 150, height: 70, backgroundColor: "transparent" }} alt="logo"></img>
        </NavLink>
        <Nav></Nav>
    </MainHeader>
    ); 
};

export default Header;