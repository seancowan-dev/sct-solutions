import React from 'react';
import { inject, observer } from 'mobx-react';
import uuid from 'uuid';

const NavItem = observer((props) => {
    return (   
    <li key={uuid.v4()} className="nav-item">
        <a className={"nav-link custom-underline" + props.isActive} href={props.route} onClick={(e) => {props.navClick(props.name, props.route)}}>{props.name}</a>
    </li>
    );    
});

export default NavItem;