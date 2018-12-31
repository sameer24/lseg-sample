import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
// import {fetchGrid} from '../actions/postActions';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import NavBar from "./Navbar";

import './css/all.css';

class Gridag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        }
    }
    createRowData() {
        return [
            { "athlete": "Michael Phelps", "age": 23, "country": "United States", "year": 2008, "date": "24/08/2008", "sport": "Swimming", "gold": 8, "silver": 0, "bronze": 0, "total": 8 },
            { "athlete": "Michael Phelps", "age": 19, "country": "United States", "year": 2004, "date": "29/08/2004", "sport": "Swimming", "gold": 6, "silver": 0, "bronze": 2, "total": 8 },
            { "athlete": "Michael Phelps", "age": 27, "country": "United States", "year": 2012, "date": "12/08/2012", "sport": "Swimming", "gold": 4, "silver": 2, "bronze": 0, "total": 6 },
            { "athlete": "Natalie Coughlin", "age": 25, "country": "United States", "year": 2008, "date": "24/08/2008", "sport": "Swimming", "gold": 1, "silver": 2, "bronze": 3, "total": 6 },
            { "athlete": "Aleksey Nemov", "age": 24, "country": "Russia", "year": 2000, "date": "01/10/2000", "sport": "Gymnastics", "gold": 2, "silver": 1, "bronze": 3, "total": 6 },
            { "athlete": "Alicia Coutts", "age": 24, "country": "Australia", "year": 2012, "date": "12/08/2012", "sport": "Swimming", "gold": 1, "silver": 3, "bronze": 1, "total": 5 },
            { "athlete": "Missy Franklin", "age": 17, "country": "United States", "year": 2012, "date": "12/08/2012", "sport": "Swimming", "gold": 4, "silver": 0, "bronze": 1, "total": 5 },
            { "athlete": "Ryan Lochte", "age": 27, "country": "United States", "year": 2012, "date": "12/08/2012", "sport": "Swimming", "gold": 2, "silver": 2, "bronze": 1, "total": 5 },
            { "athlete": "Allison Schmitt", "age": 22, "country": "United States", "year": 2012, "date": "12/08/2012", "sport": "Swimming", "gold": 3, "silver": 1, "bronze": 1, "total": 5 },
            { "athlete": "Natalie Coughlin", "age": 21, "country": "United States", "year": 2004, "date": "29/08/2004", "sport": "Swimming", "gold": 2, "silver": 2, "bronze": 1, "total": 5 }
        ]
    }
    createColumnDefs() {
        return [
            { headerName: "Athlete", field: "athlete" },
            { headerName: "Country", field: "country" },
            { headerName: "Age", field: "age", checkboxSelection: true },
            { headerName: "Date", field: "date" },
            { headerName: "Sport", field: "sport" },
            { headerName: "Gold", field: "gold" },
            { headerName: "Silver", field: "silver" },
            { headerName: "Bronze", field: "bronze" },
            { headerName: "Total", field: "total" }
        ]
    }

    // onGridReady(params) {
    //     this.gridApi = params.api;
    //     this.columnApi = params.columnApi;
    //     this.gridApi.sizeColumnsToFit();
    // }

    componentWillMount() {
        // this.props.fetchGrid();

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPosts) {
            console.log(nextProps.newPosts);
            this.props.posts.unshift(nextProps.newPosts.data);
        }
    }
    onButtonClick = e => {
        const selectedNodes = this.gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => node.athlete + '- Gold ' + node.gold).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

    render() {
        // const postItems = this.props.posts.map(post =>(
        //     <div >
        //         <h3>{post.athlete}</h3>
        //         <p>{post.country}</p>
        //     </div>
        // ));
        // return (
        //     <div>
        //         <h1>Posts</h1>
        //         {postItems}
        //     </div>
        // )
        //const postItems = this.props.posts
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
                        <li class="nav-item active">
                            <a class="nav-link" href="/gridag">
                                <i class="fas fa-fw fa-table"></i>
                                <span>Grid AG</span>
                            </a>
                        </li>
                    </ul>
                    <div className="container-fluid">

                        <div className="card mb-3">
                            <div className="card-header">
                                <i className="fas fa-chart-area"></i>
                                 Work In Progress</div>
                            <div className="card-body">
                                <div class="table-responsive">
                                    <div className="ag-theme-balham"
                                        style={{
                                            height: '200px',
                                            width: '100%'
                                        }}
                                    >
                                        <AgGridReact
                                            onGridReady={params => this.gridApi = params.api}
                                            enableSorting={true}
                                            floatingFilter={false}
                                            enableFilter={true}
                                            rowSelection="multiple"
                                            columnDefs={this.state.columnDefs}
                                            rowData={this.state.rowData}
                                            /* this is where we provide custom components */
                                            frameworkComponents={this.state.frameworkComponents}
                                        >
                                        </AgGridReact>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                        </div>

                        {/* <button onClick={this.onButtonClick} className="btn btn-primary">Get selected rows</button> */}
                        <div class="card mb-3">
                            <div class="card-header">
                                <i class="fas fa-chart-area"></i>
                                       Edit In Progress</div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <div
                                        className="ag-theme-balham"
                                        style={{
                                            height: '200px',
                                            width: '100%'
                                        }}
                                    >

                                        <AgGridReact
                                            onGridReady={params => this.gridApi = params.api}
                                            enableSorting={true}
                                            floatingFilter={false}
                                            enableFilter={true}
                                            rowSelection="multiple"
                                            columnDefs={this.state.columnDefs}
                                            rowData={this.state.rowData}
                                            /* this is where we provide custom components */
                                            frameworkComponents={this.state.frameworkComponents}
                                        >
                                        </AgGridReact>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state =>({
//     posts : state.posts.items,
//     newPosts: state.posts.item
// })

export default (Gridag);