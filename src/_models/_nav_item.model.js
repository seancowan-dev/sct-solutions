import React from 'react';
import { inject, observer } from 'mobx-react';

const NavItem = observer((props) => {
    return (   
    <li class="nav-item">
        <a class={"nav-link " + props.isActive} href={props.route} onClick={props.navClick(props.name)}>{props.name}</a>
    </li>
    );    
});

export default NavItem;