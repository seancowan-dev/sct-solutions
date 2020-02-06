import React, { Component, useContext } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AddNote from '../comps/AddNote/AddNote';
import AddFolder from '../comps/AddFolder/AddFolder';
import SiteContext from '../main/Context';
import Notes from './notes/Notes';
import './Main.css';

class Main extends Component {
    static contextType = SiteContext
    
    render() {
        let done = this.context.done.toString();
        return (
            
            <main className="main-content">
            <h1>this is the current value: {done}</h1>
            <Switch>
                <Route path="/" component={Notes} exact />
                <Route path='/note/:noteId' render={(props) => {
                    if (this.context.done === true) {
                        return this.context.displayNote(props, this.context.notes);                        
                    }
                }} />
                <Route path='/folder/:folderId' render={(props) => {
                    if (this.context.done === true) {
                        return this.context.displayFolder(props, this.context.notes);
                    }
                }} />
                <Route path='/addNote' render={(props) => {
                    if (this.context.done === true) {
                        return <AddNote localProps={props}/>
                    }
                }}/>
                <Route path='/addFolder' render={(props) => {
                    if (this.context.done === true) {
                        return <AddFolder localProps={props}/>
                    }
                }}/>
            </Switch>
            </main>
        );
    };
};

export default Main;