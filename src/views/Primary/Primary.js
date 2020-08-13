import React from 'react';
import { inject, observer } from 'mobx-react';
import Nav from '../../_models/nav.model';

const Primary = observer((props) => {
    return (
        <div className="main-container">
            <Nav />
        </div>
    );    
});

export default Primary;