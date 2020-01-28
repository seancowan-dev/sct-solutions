import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Folder.css';

class Folder extends Component {
    render() {
        return(
            <section className="folder-container">
                <p>{this.props.name}</p>
            </section>
        );
    };
};

export default Folder;