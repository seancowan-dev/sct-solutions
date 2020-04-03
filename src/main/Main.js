import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AddNote from '../comps/AddNote/AddNote';
import AddFolder from '../comps/AddFolder/AddFolder';
import Update from '../main/update/Update';
import Notes from './notes/Notes';
import './Main.css';
import displayNote from './displayNote';
import displayFolder from './displayFolder';
import { observer, inject } from 'mobx-react';
@inject('valueStore')
@observer


class Main extends Component {

    UNSAFE_componentWillMount() {
        this.props.valueStore.done = false;
        
    }

    componentDidMount() {
        this.props.valueStore.promises();
    }
    
    render() {
        return (
            
            <main className="main-content">
            <Switch>
                <Route path="/" component={Notes} exact />
                <Route path='/note/:noteId' render={(props) => {  
                    if (this.props.valueStore.done === true) {
                        return displayNote(props, this.props.valueStore.notes.slice());
                    }        
                }} />
                <Route path='/folder/:folderId' render={(props) => {
                    if (this.props.valueStore.done === true) {
                        return displayFolder(props, this.props.valueStore.notes.slice(), this.props.valueStore.folderNotes.slice(), this.props.valueStore.folderIsUpdating);
                    }
                }} />
                <Route path='/addNote' render={(props) => {
                    if (this.props.valueStore.done === true) {
                        return <AddNote localProps={props}/>
                    }
                }}/>
                <Route path='/addFolder' render={(props) => {
                    if (this.props.valueStore.done === true) {
                        return <AddFolder localProps={props}/>
                    }
                }}/>
                <Route path='/deleteFolder/:folderId' render={(props) => {
                    this.props.valueStore.deleteFolder(props.match.params.folderId);
                    this.props.history.push("/");
                }}/>
                <Route path='/updateFolder' exact render={(props) => {
                    return <Update localProps={props} updateType="folder"/>
                }}/>
                <Route path='/updateNote/:noteid' render={(props) => {
                    return <Update localProps={props} updateType="note" newStore={this.props.valueStore}/>
                }}/>                   
            </Switch>
            </main>
        );
    };
};

export default withRouter(Main);