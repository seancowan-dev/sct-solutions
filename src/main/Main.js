import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import displayNote from './displayNote';
import displayFolder from './displayFolder';
import Notes from './notes/Notes';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <main className="main-content">
            <Switch>
                <Route path="/" component={Notes} exact />
                <Route path='/note/:noteId' component={displayNote} />
                <Route path='/folder/:folderId' component={displayFolder} />
            </Switch>
            </main>
        );
    };
};

export default Main;