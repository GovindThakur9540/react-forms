import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Address from './components/Address/Address'
import Details from './components/AllDetails/Details'
import Bank from './components/BankDetails/Bank'
import Benificiary from './components/Benificiary/Beneficiary'
import './App.css';
import Nav from './components/Nav';


export default class App extends Component {

    constructor() {
        super()
        this.state = {}
    }

    addDetails = (details) => {
        this.setState({ ...details })
    }

    render() {
        return (
            <Router>
                <Nav/>
                <Switch>
                    <Route exact path="/">
                        <Benificiary addDetails={this.addDetails} />
                    </Route>
                    <Route path="/benificiary">
                        <Benificiary addDetails={this.addDetails} />
                    </Route>
                    <Route path="/bank">
                        <Bank addDetails={this.addDetails} />
                    </Route>
                    <Route path="/address">
                        <Address addDetails={this.addDetails} />
                    </Route>
                    <Route path="/details">
                        <Details {...this.state} />
                    </Route>
                </Switch>
            </Router>
        )
    }
}