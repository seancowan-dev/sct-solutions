import React from 'react';
import { inject, observer } from 'mobx-react';
import uuid from 'uuid';

const Nav = inject('uiStore')(observer((props) => {
    return (
        <nav className="site-nav navbar navbar-expand-sm navbar-light">
            <img className="nav-logo navbar-brand float-left" src={props.uiStore.getLogoPath} />
            <ul className="navbar-nav">
                {props.uiStore.generateNavItems()}
                <li key={uuid.v4()} className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => {props.uiStore.toggleLoginModal(true)}}>Login</a>
                </li>
            </ul>
            
        </nav>
    );    
}));

export default Nav;