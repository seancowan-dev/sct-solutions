import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Button.css';

class Button extends Component {
    render() {
        return(
            <input type="button" name={this.props.itemName} className={this.props.className} value={this.props.textValue} onClick={this.props.onClick}/>
        );
    };
};

export default Button;