import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
    render() {
        return(
            <input type="button" name={this.props.itemName} className={this.props.className} value={this.props.textValue} onClick={this.props.onClick}/>
        );
    };
};

Button.propTypes = {
    className: PropTypes.string,
    itemName: PropTypes.string,
    textValue: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;