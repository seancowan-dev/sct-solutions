import React from 'react';
import { inject, observer } from 'mobx-react';
import Nav from '../_models/nav.model';

const Header = inject('uiStore')(observer((props) => {
    return (
        <header className="site-header">
            <Nav />
        </header>
    );    
}));

export default Header;