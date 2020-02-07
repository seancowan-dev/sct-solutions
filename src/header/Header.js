import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

Header.propTypes = {
    pageTitle: PropTypes.string            
}  

export default Header;