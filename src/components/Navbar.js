import React, { Component } from 'react'
//import { NavLink } from 'react-router-dom'

//import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClick(e) {
        e.preventDefault();
        const searchText = {
            params: {
                id: this.state.searchtext,
            }
        }
        this.props.SEARCHTEXT(searchText);
        alert("your form was submitted!" + this.state.searchtext);
    }
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                <a className="navbar-brand" href="/">LSEG</a>
                <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/gridag">Grid AG <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>

            </nav>

        )
    }
}

export default NavBar;