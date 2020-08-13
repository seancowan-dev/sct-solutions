import React from 'react';
import { inject, observer } from 'mobx-react';

const Nav = inject('uiStore')(observer((props) => {
    return (
        <nav className="site-nav navbar navbar-expand-sm navbar-light">
            <img className="nav-logo navbar-brand float-left" src={props.uiStore.getLogoPath} />
            <ul className="navbar-nav">
                {props.uiStore.generateNavItems()}
            </ul>
        </nav>
    );    
}));

export default Nav;