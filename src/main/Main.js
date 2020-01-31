import React, { Component, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import SiteContext from '../main/Context';
import displayFolder from './displayFolder';
import displayNote from './displayNote';
import Notes from './notes/Notes';
import './Main.css';

class Main extends Component {
    static contextType = SiteContext

    render() {
        return (
            
            <main className="main-content">
            <Switch>
                <Route path="/" component={Notes} exact />
                <Route path='/note/:noteId' render={(props) => {
                    return this.context.displayNote(props, this.context.store);
                }} />
                <Route path='/folder/:folderId' render={(props) => {
                    return this.context.displayFolder(props, this.context.store);
                }} />
            </Switch>
            </main>
        );
    };
};

export default Main;