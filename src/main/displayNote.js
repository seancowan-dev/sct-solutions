import React from 'react';
import Note from '../main/notes/note/Note';

export default function displayNote(props, notes) {
    const note = notes.find(n => n.id === props.match.params.noteId);
    return (
        <Note
            key={note.id} 
            id={note.id}
            name={note.name}
            mod={note.modified}
            folderId={note.folderId}
            content={note.content}
            isRoute="true"
        />
    );
};