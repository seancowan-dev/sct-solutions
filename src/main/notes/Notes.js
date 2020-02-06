import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { SiteConsumer } from '../Context';
import Button from '../../comps/Button/Button';
import Note from './note/Note';
import './Notes.css';

class Notes extends Component {

    render() {
        return(
            <SiteConsumer>
                {props => {
                    if (props.done === true) {
                        const notes = props.notes.map((note) => {
                            return (
                                <Note
                                    key={note.id} 
                                    id={note.id}
                                    name={note.name}
                                    mod={note.modified}
                                    folderId={note.folderId}
                                    content={note.content}
                                />
                            );
                        });
                    return <section className="notes-section">

                        {notes}
                        <br />

                    <Button 
                        key={Math.random(4*10/2)} 
                        className="add-note-button" 
                        itemName="add-note" 
                        textValue="Add Note"                 
                        onClick={(e) => { 
                            this.props.history.push("/addNote");
                    }}/>
                    </section>
                    }
                }}
            </SiteConsumer>

        );
    };
};

export default withRouter(Notes);