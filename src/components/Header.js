import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Nav";

const MainHeader = styled.header` `;

const Header = () => {
    return (
    <MainHeader>
        <NavLink to="/"> 
            <h2>Saii Traders</h2>
        </NavLink>
        <Nav></Nav>
    </MainHeader>
    ); 
};

export default Header;