import React from "react";

//import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';


//import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import NavBar from "./Navbar"

//import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div id="wrapper">
                <ul class="sidebar navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage;

