import React from 'react';
import Note from './notes/note/Note';

export default function displayFolder(props, notes) {
    const folderNotes = notes.filter(note => {if (note.folderId === props.match.params.folderId) {
        return note;
    }});
    const noteMap = folderNotes.map(note => {
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
    return (noteMap);
};