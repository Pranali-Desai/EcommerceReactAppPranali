import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {FiShoppingCart} from "react-icons/fi";
import {CgMenu , CgClose} from "react-icons/cg";
import { Button } from "./components/Button";
const Nav = () => {

const[menuIcon, setMenuIcon] = useState();  
const Nav = styled.nav` `

return <Nav>
    <div className={ menuIcon ? "navbar active" : "navbar"}>
    <ul className="navbar-lists">
        <li>
            <NavLink to="/" className="navbar-link home-link" onClick={() => setMenuIcon(false)}>Home</NavLink>          
        </li>
        <li>
            <NavLink to="/About" className="navbar-link about-link" onClick={() => setMenuIcon(false)}>About</NavLink>
        </li>
        <li>            
            <NavLink to="/Contact" className="navbar-link contact-link" onClick={() => setMenuIcon(false)}>Contact</NavLink>
        </li>
        <li>
            <NavLink to="/Products" className="navbar-link Product-link" onClick={() => setMenuIcon(false)}>Products</NavLink>
        </li>
        <li>
            <NavLink to="/MyPDF" className="navbar-link Product-link" onClick={() => setMenuIcon(false)}>PDF</NavLink>
        </li>
        <li>
        <NavLink to="/" className="navbar-link Login-link" onClick={() => setMenuIcon(false)}>
            <Button>Login</Button>
        </NavLink>
        </li>
        <li>
             <NavLink to="/Cart" className="navbar-link Cart-trolley--link" onClick={() => setMenuIcon(false)}>           
             <FiShoppingCart  className="cart-trolley"></FiShoppingCart>
                    <span className="cart-total--item">10</span>                                   
            </NavLink>
        </li>
    </ul>
    <div className="mobile-navbar-btn">
        <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => setMenuIcon(true)}/>
        <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={() => setMenuIcon(false)}/>
    </div>
    </div>
    </Nav>;
};

export default Nav;