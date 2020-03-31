import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../comps/Button/Button';
import Note from './note/Note';
import './Notes.css';
import { observer, inject } from 'mobx-react';
@inject('valueStore')
@observer

class Notes extends Component {

    render() {

        return(
            <>
            {(() => {
                if (this.props.valueStore.done === true) {
                    const notes = this.props.valueStore.notes.slice();
                    const noteObjects = notes.map((note) => {
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

                        {noteObjects}
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
            })()}
            </>
        );
    };
};

export default withRouter(Notes);