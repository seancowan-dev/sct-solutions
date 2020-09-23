import React from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../../models/Header.model';
import Login from '../../models/Login.model';
import CKEditor from '../../comps/ckeditor';

const Primary = observer((props) => {

    return (
        <div className="main-container">
            <Login />
            <Header />
            <CKEditor />
        </div>
    );    
});

export default Primary;