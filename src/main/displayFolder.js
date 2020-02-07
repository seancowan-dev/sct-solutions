import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../comps/Button/Button';
import Note from './notes/note/Note';

export default function displayFolder(props, notes, history) {
    const folderNotes = notes.filter(note => {if (note.folderId === props.match.params.folderId) {
        return note;
    }return null});
    const noteMap = folderNotes.map(note => {
        return (
        <Note
            key={note.id} 
            id={note.id}
            name={note.name}
            mod={note.modified}
            folderId={note.folderId}
            content={note.content}
        />);
    });
    return (<section className="folder-section">
        {noteMap}
        <br />
        <Button 
            key={Math.random(4*10/2)} 
            className="add-note-button" 
            itemName="add-note" 
            textValue="Add Note"                 
            onClick={(e) => { 
                history.push("/addNote");
            }
        }/>  
    </section>);
};