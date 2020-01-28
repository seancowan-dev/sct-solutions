import React from 'react';
import Note from './notes/note/Note';
import NOTES from '../Store';

export default function displayNote(props) {
    const folder = NOTES.folders.find(folder => folder.id === props.match.params.folderId);
    const folderNotes = NOTES.notes.filter(note => {if (note.folderId === props.match.params.folderId) {
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