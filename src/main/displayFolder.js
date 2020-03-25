import React, { useContext } from 'react';
import Button from '../comps/Button/Button';
import Note from './notes/note/Note';

export default function displayFolder(props, notes, history) {
    const folderNotes = notes.filter(note => {if (note.folderid === props.match.params.folderId) {
        return note;
    }return null});
    const noteMap = folderNotes.map(note => {
        return (
        <Note
            key={note.id} 
            id={note.id}
            name={note.name}
            mod={note.modified}
            folderId={note.folderid}
            content={note.content}
        />);
    });
    return (
        <section className="folder-section" id={props.match.params.folderId}>
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
            <Button 
                    className="delete-folder-button"
                    itemName="delete-folder"
                    textValue="Delete Folder"
                    onClick={(e) => {
                        history.push(`/deleteFolder/${props.match.params.folderId}`);
                    }}
            />  
        </section>
    );
};