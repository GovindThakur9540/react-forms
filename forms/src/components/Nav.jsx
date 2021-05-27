import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
            <div className="header-container">
                <div className="header-container">
                        <button><Link to="/">1</Link></button>
                        <button><Link to="/Bank/">2</Link></button>
                        <button><Link to="/Address">3</Link></button>
                </div>
                
            </div>
                
            <div className="header-cont">
                <div id="header-detail">
                    <div className="nav1">Benificiary</div>
                    <div className="nav1">BankDetails</div>
                    <div className="nav1">Address</div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Nav;