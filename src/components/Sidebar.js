import React, { Component } from 'react'

class Sidebar extends Component {
    render() {
        return (
            <ul class="sidebar navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/home">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/gridag">
                        <i class="fas fa-fw fa-table"></i>
                        <span>Grid AG</span>
                    </a>
                </li>
            </ul>
        )
    }
}

export default (Sidebar);