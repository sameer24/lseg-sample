import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../App.css';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        if (this.state.username == 'synechron' && this.state.password == 'synechron') {
            this.props.history.push('/home');
            return this.setState({ error: '' });
        } else {
            return this.setState({ error: 'UserName and Password not matching' });
        }

    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }



    render() {
        // NOTE: I use data-attributes for easier E2E testing
        // but you don't need to target those (any css-selector will work)

        return (
            <div className="Login">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                        <div className="col-md-8 col-lg-6">
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 col-lg-8 mx-auto">
                                            <h3 className="login-heading mb-4">Login</h3>
                                            <form onSubmit={this.handleSubmit}>
                                                <FormGroup>
                                                    {
                                                        this.state.error &&
                                                        <div class="alert alert-danger alert-dismissible fade show" role="alert" onClick={this.dismissError}>
                                                            {this.state.error}
                                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={this.dismissError}>
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>


                                                    }

                                                    <FormControl
                                                        type="text"
                                                        value={this.state.username}
                                                        placeholder="Login ID"
                                                        onChange={this.handleUserChange}
                                                        className="form-control form-label-group" required autoFocus
                                                    />



                                                    <FormControl
                                                        type="password"
                                                        value={this.state.password}
                                                        placeholder="Password"
                                                        onChange={this.handlePassChange}
                                                        className="form-control form-label-group"
                                                        required
                                                    />
                                                    {/* <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} className="form-control" placeholder="Password" required />
                                                    <label htmlFor="inputPassword">Password</label> */}



                                                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" data-test="submit" >Log In</button>
                                                </FormGroup>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginPage);