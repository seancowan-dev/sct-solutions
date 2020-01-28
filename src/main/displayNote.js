import React from 'react';
import Note from '../main/notes/note/Note';
import NOTES from '../Store';

export default function displayNote(props) {
    const note = NOTES.notes.find(n => n.id === props.match.params.noteId);
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
};