import React from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../../models/Header.model';
import Login from '../../models/Login.model';

const Primary = observer((props) => {

    return (
        <div className="main-container">
            <Login />
            <Header />
        </div>
    );    
});

export default Primary;