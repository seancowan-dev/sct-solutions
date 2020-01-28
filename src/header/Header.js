import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <header>
                <Link to="/">
                <h1>{this.props.pageTitle}</h1>
                </Link>
            </header>
            );        
    };
};

export default Header;