import React from 'react';
import uuid from "uuid";
import { FormControl, Checkbox, FormControlLabel, FormHelperText, InputLabel, Select, TextField, Button, MenuItem } from '@material-ui/core';
import buildNoteRows from '../functions/buildNoteRows';

function buildInnerFormFolder(valueStore, history) {
    let folderNotes, folders = null;

    if (valueStore.done === true) {
        folders = valueStore.folders.map(folder => {
            return <MenuItem key={Math.random()} value={folder.name} id={folder.folder_id} >{folder.name}</MenuItem>
        });
    }

    const innerForm = <>
    <FormControl className="select-folder-form-control">
        <InputLabel id="select-folder-label">Select</InputLabel>
            <Select
            labelId="select-folder-label"
            id="select-folder"
            className="select-folder"
            multiline
            value={valueStore.selectedFolder}
            onChange={(e) => {
                valueStore.updated = null;
                folderNotes = valueStore.notes.filter(note => {
                    if (note.folderid === e._targetInst.stateNode.id) {
                        return note;
                    }
                    return null;
                })
                    valueStore.selectedFolderId = e._targetInst.stateNode.id;
                    valueStore.selectedFolderIdOld = e._targetInst.stateNode.id;
                    valueStore.selectedFolder = e._targetInst.stateNode.textContent;

                valueStore.folderNotes = buildNoteRows(folderNotes, history);
                valueStore.updateType = "folder";
            }}
            >
                {folders}
            </Select>
        </FormControl>
        <FormControl className="update-folder-info-text"> 
        <TextField
            id="folder-title-input"
            className="folder-title-input"
            label="Title"
            multiline
            value={valueStore.selectedFolder}
            onChange={(e) => {
                valueStore.selectedFolder = e.target.value;
            }}
        />
        <TextField
            id="folder-id-input"
            className="folder-id-input"
            label="Folder ID"
            multiline
            InputProps={{
                readOnly: true,
            }}
            value={valueStore.selectedFolderId}
            onChange={(e) => {
                valueStore.selectedFolderIdOld = valueStore.selectedFolderId;
                valueStore.selectedFolderId = e.target.value;
            }}
        />
    </FormControl>
    <FormControl className="migrate-notes-checkbox-form-control">
        <FormControlLabel
            labelPlacement="start"
            className="migrate-notes-checkbox-form-control-label"
            control={
            <Checkbox
                checked={valueStore.migrateChecked}
                onChange={(e) => {
                    valueStore.migrateChecked = e.target.checked;
                }}
                name="migrate-notes-checkbox"
                color="primary"
            />
            }
            label="Migrate Notes"
        />
        <FormHelperText>Check to migrate notes (deletes notes otherwise)</FormHelperText>
        <FormControl>
            <Button 
                variant="contained"
                onClick={(e) => {
                    valueStore.selectedFolderId = uuid.v4();
                }}
            >Change ID</Button>
            <FormHelperText>Generate New GUID (nothing committed until you hit update)</FormHelperText>
            <Button 
                variant="contained" 
                onClick={(e) => {
                    const updatedInfo = {
                        folder_id: valueStore.selectedFolderId,
                        name: valueStore.selectedFolder
                    }
                    if (valueStore.migrateChecked === true) {
                        folderNotes = valueStore.notes.filter(note => {
                            if (note.folderid === valueStore.selectedFolderIdOld) {
                                return note;
                            }
                            return null;
                        });
                        folderNotes.forEach((note, idx) => {
                            let update = {folderid: valueStore.selectedFolderId}
                            valueStore.updateNote(note.id, update)

                        });
                        let newNotes = folderNotes.map((note) => {
                            let newNote = {
                                id: note.id,
                                name: note.name,
                                modified: note.modified,
                                folderId: updatedInfo.folder_id,
                                content: note.content
                            }
                            return newNote;
                        })
                        valueStore.folderNotes = newNotes;
                        valueStore.folderIsUpdating = true;
                    }
                    if(valueStore.migrateChecked === false) {
                        folderNotes = valueStore.notes.filter(note => {
                            if (note.folderid === valueStore.selectedFolderIdOld) {
                                return note;
                            }
                            return null;
                        })
                        folderNotes.forEach((note) => {
                            valueStore.deleteNote(note.id)
                        });
                        valueStore.folderNotes = [];
                    }
                    valueStore.updateFolder(valueStore.selectedFolderIdOld, updatedInfo);
                    valueStore.selectedFolderIdOld = updatedInfo.folder_id;
                    valueStore.selectedFolder = "";
                    valueStore.selectedFolderId = "";
                    history.push(`/folder/${updatedInfo.folder_id}`);
                }}
            >Update Folder</Button>
            <FormHelperText>Commit Changes to Database</FormHelperText>
        </FormControl>
    </FormControl>

</>;
return innerForm;
}

export default buildInnerFormFolder;
