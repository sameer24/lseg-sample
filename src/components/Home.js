import React from "react";

//import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';


//import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import NavBar from "./Navbar"
import Sidebar from "./Sidebar"


//import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div id="wrapper">
                <Sidebar/>
            </div>
        </div>
    )
}

export default HomePage;

