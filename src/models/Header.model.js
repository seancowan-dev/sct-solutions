import React from 'react';
import { inject, observer } from 'mobx-react';

const Header = inject('uiStore')(observer((props) => {
    return (
        <header className="site-header">

        </header>
    );    
}));

export default Header;