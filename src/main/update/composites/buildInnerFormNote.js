import React from 'react';
import uuid from "uuid";
import $ from 'jquery';
import { FormControl, TextField, Button} from '@material-ui/core';

export default function buildInnerFormNote(valueStore, props) {
    let currentNote = valueStore.notes.filter(note => {
            return note.id === props.match.params.noteid;
        })
    let date = new Date(currentNote[0].modified.replace(' ', 'T'));

    const innerForm = <>
    <FormControl className="update-note-name-id-form-control">
        <TextField
            id="note-id-input"
            className="note-id-input"
            label="Note ID"
            InputProps={{
                readOnly: true,
            }}
            value={(() => {
                if (valueStore.currentNoteId !== null) {
                    return valueStore.currentNoteId;
                } else {
                    return currentNote[0].id;
                }
            })()}
        />
        <TextField
            id="note-name-input"
            className="note-id-name-input"
            label="Name"
            value={currentNote[0].name}
            onChange={(e) => {
                currentNote[0].name = e.target.value;
            }}
        />
        <TextField
            id="note-folderid-input"
            className="note-folderid-input"
            label="Folder ID"
            multiline
            InputProps={{
                readOnly: true,
            }}
            value={currentNote[0].folderid}
        />
    </FormControl>
    <FormControl className="update-note-modified-content-form-control">
        <TextField
            id="note-modified-input"
            className="note-id-modified-input"
            label="Last Modified"
            InputProps={{
                readOnly: true,
            }}
            value={date}
        />
        <TextField
            id="note-content-input"
            className="note-content-input"
            label="Note Content"
            multiline
            value={currentNote[0].content}
            onChange={(e) => {
                currentNote[0].content = e.target.value;
            }}
        />
    </FormControl>
    <FormControl className="update-note-buttons-form-control">
        <Button 
            variant="contained"
            onClick={(e) => {
                valueStore.oldNoteId = valueStore.currentNoteId;
                valueStore.currentNoteId = uuid.v4();
            }}
        >Change ID</Button>
        <Button 
            variant="contained"
            onClick={(e) => {
                let now = new Date(Date.now());
                let noteIdBoundary;
                let oldNotesMap;

                let newNote = {
                    id: $('#note-id-input').val(),
                    name: $('#note-name-input').val(),
                    modified: now.toISOString(),
                    folderid: $('#note-folderid-input').val(),
                    content: $('#note-content-input').val()
                }

                if ($('#note-id-input').val() !== currentNote[0].id) {
                    noteIdBoundary = newNote.id;

                } else {
                    noteIdBoundary = currentNote[0].id
                }

                oldNotesMap = valueStore.notes.map(note => {
                    if (note.id !== currentNote[0].id) {
                        return note;
                    }
                    return null;
                })

                oldNotesMap.push(newNote);

                valueStore.notes = oldNotesMap.filter(note => {
                    return note !== null;
                });

                valueStore.updateNote(currentNote[0].id, newNote);
                props.history.push("/note/" + noteIdBoundary)
            }}
        >Update Note</Button>
    </FormControl>
    </>
    return innerForm;
}