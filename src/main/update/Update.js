import React, { Component } from 'react';
import uuid from "uuid";
import { FormControl, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormHelperText, TextField, Table, Paper, TableBody, TableHead, TableContainer, TableRow, TableCell, Container, Button } from '@material-ui/core';
import ValidationError from '../../comps/validationErr';
import $ from 'jquery';
import buildInnerFormFolder from './composites/buildInnerFormFolder';
import buildBaseForm from './composites/buildBaseForm';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Update.css';
import { observer, inject } from 'mobx-react';
@inject('valueStore')
@observer

class Update extends Component {

    validateForm(type) {
        if (type === 'note') {

        }
        if (type === 'folder') {
            
        }
    }

    // buildNoteRows(input) {
    //     return input.map(note => {
    //         return <TableRow key={Math.random()}>
    //         <TableCell component="th" scope="row" key={Math.random()}>
    //             {note.id}
    //         </TableCell>
    //         <TableCell key={Math.random()}>{note.name}</TableCell>
    //         <TableCell key={Math.random()}>{note.modified}</TableCell>
    //         <TableCell key={Math.random()} >{note.content.substr(0, 125) + "..."}</TableCell>                            
    //         <TableCell key={Math.random()}>
    //                 <Button 
    //                     variant="contained"
    //                     startIcon={<EditTwoToneIcon />}
    //                     onClick={(e) => {
    //                         this.props.history.push("/updateNote/" + note.id);
    //                     }}
    //                 >Edit</Button>
    //         </TableCell>                                   
    //     </TableRow>
    //     });
    // }

    render() {
        let innerForm;
        let form;
        let folders;
        let folderNotes;
        let currentNote;

        // if (this.props.valueStore.done === true) {
        //     folders = this.props.valueStore.folders.map(folder => {
        //         return <MenuItem key={Math.random()} value={folder.name} id={folder.folder_id} >{folder.name}</MenuItem>
        //     });
        // }

        if (this.props.updateType === "folder") {
            innerForm = buildInnerFormFolder(this.props.valueStore, this.props.history);
            // innerForm = <>
            //     <FormControl className="select-folder-form-control">
            //         <InputLabel id="select-folder-label">Select</InputLabel>
            //             <Select
            //             labelId="select-folder-label"
            //             id="select-folder"
            //             className="select-folder"
            //             multiline
            //             value={this.props.valueStore.selectedFolder}
            //             onChange={(e) => {
            //                 this.props.valueStore.updated = null;
            //                 folderNotes = this.props.valueStore.notes.filter(note => {
            //                     if (note.folderid === e._targetInst.stateNode.id) {
            //                         return note;
            //                     }
            //                 })
            //                     this.props.valueStore.selectedFolderId = e._targetInst.stateNode.id;
            //                     this.props.valueStore.selectedFolderIdOld = e._targetInst.stateNode.id;
            //                     this.props.valueStore.selectedFolder = e._targetInst.stateNode.textContent;

            //                 this.props.valueStore.folderNotes = buildNoteRows(folderNotes, this.props.history);
            //                 this.props.valueStore.updateType = "folder";
            //             }}
            //             >
            //                 {folders}
            //             </Select>
            //         </FormControl>
            //         <FormControl className="update-folder-info-text"> 
            //         <TextField
            //             id="folder-title-input"
            //             className="folder-title-input"
            //             label="Title"
            //             multiline
            //             value={this.props.valueStore.selectedFolder}
            //             onChange={(e) => {
            //                 this.props.valueStore.selectedFolder = e.target.value;
            //             }}
            //         />
            //         <TextField
            //             id="folder-id-input"
            //             className="folder-id-input"
            //             label="Folder ID"
            //             multiline
            //             InputProps={{
            //                 readOnly: true,
            //             }}
            //             value={this.props.valueStore.selectedFolderId}
            //         />
            //     </FormControl>
            //     <FormControl className="migrate-notes-checkbox-form-control">
            //         <FormControlLabel
            //             labelPlacement="start"
            //             className="migrate-notes-checkbox-form-control-label"
            //             control={
            //             <Checkbox
            //                 checked={this.props.valueStore.migrateChecked}
            //                 onChange={(e) => {
            //                     this.props.valueStore.migrateChecked = e.target.checked;
            //                 }}
            //                 name="migrate-notes-checkbox"
            //                 color="primary"
            //             />
            //             }
            //             label="Migrate Notes"
            //         />
            //         <FormHelperText>Check to migrate notes (deletes notes otherwise)</FormHelperText>
            //         <FormControl>
            //             <Button 
            //                 variant="contained"
            //                 onClick={(e) => {
            //                     this.props.valueStore.selectedFolderId = uuid.v4();
            //                 }}
            //             >Change ID</Button>
            //             <FormHelperText>Generate New GUID (nothing committed until you hit update)</FormHelperText>
            //             <Button 
            //                 variant="contained" 
            //                 onClick={(e) => {
            //                     const updatedInfo = {
            //                         folder_id: this.props.valueStore.selectedFolderId,
            //                         name: this.props.valueStore.selectedFolder
            //                     }
            //                     if (this.props.valueStore.migrateChecked === true) {
            //                         folderNotes = this.props.valueStore.notes.filter(note => {
            //                             if (note.folderid === this.props.valueStore.selectedFolderIdOld) {
            //                                 return note;
            //                             }
            //                         })
            //                         folderNotes.forEach((note) => {
            //                             let update = {folderid: this.props.valueStore.selectedFolderId}
            //                             this.props.valueStore.updateNote(note.id, update)
            //                         });
            //                     }
            //                     if(this.props.valueStore.migrateChecked === false) {
            //                         folderNotes = this.props.valueStore.notes.filter(note => {
            //                             if (note.folderid === this.props.valueStore.selectedFolderIdOld) {
            //                                 return note;
            //                             }
            //                         })
            //                         folderNotes.forEach((note) => {
            //                             this.props.valueStore.deleteNote(note.id)
            //                         });
            //                     }
            //                     console.log(this.props.valueStore.folderNotes);
            //                     this.props.valueStore.updateFolder(this.props.valueStore.selectedFolderIdOld, updatedInfo);
            //                     this.props.valueStore.selectedFolderIdOld = updatedInfo.folder_id;
            //                     this.props.valueStore.selectedFolder = "";
            //                     this.props.valueStore.selectedFolderId = "";
            //                     this.props.valueStore.folderNotes = [];
            //                     this.props.history.push(`/updateFolder/`);
            //                 }}
            //             >Update Folder</Button>
            //             <FormHelperText>Commit Changes to Database</FormHelperText>
            //         </FormControl>
            //     </FormControl>

            // </>;

            form = buildBaseForm(this.props.valueStore.folderNotes);
        //     form = <TableContainer component={Paper}>
        //     <Table className="folder-note-list-table">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>ID</TableCell>
        //                 <TableCell>Name</TableCell>
        //                 <TableCell>Date Modified</TableCell>
        //                 <TableCell>Content Preview</TableCell>
        //                 <TableCell>Actions</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {this.props.valueStore.folderNotes}
        //         </TableBody>
        //     </Table>
        // </TableContainer>;

        }
        if (this.props.updateType === "note") {
            if (this.props.valueStore.notes) {
                currentNote = this.props.valueStore.notes.filter(note => {
                    return note.id === this.props.match.params.noteid;
                })
                let date = new Date(currentNote[0].modified.replace(' ', 'T'));
                innerForm = <>
            <FormControl className="update-note-name-id-form-control">
                <TextField
                    id="note-id-input"
                    className="note-id-input"
                    label="Note ID"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={(() => {
                        if (this.props.valueStore.currentNoteId !== null) {
                            return this.props.valueStore.currentNoteId;
                        } else {
                            return currentNote[0].id;
                        }
                    })()}
                />
                <TextField
                    id="note-name-input"
                    className="note-id-name-input"
                    label="Name"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={currentNote[0].name}

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
                    InputProps={{
                        readOnly: true,
                    }}
                    value={currentNote[0].content}
                />
            </FormControl>
            <FormControl className="update-note-buttons-form-control">
                <Button 
                    variant="contained"
                    onClick={(e) => {
                        this.props.valueStore.oldNoteId = this.props.valueStore.currentNoteId;
                        this.props.valueStore.currentNoteId = uuid.v4();
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

                        oldNotesMap = this.props.valueStore.notes.map(note => {
                            if (note.id !== currentNote[0].id) {
                                return note;
                            }
                        })

                        oldNotesMap.push(newNote);

                        this.props.valueStore.notes = oldNotesMap.filter(note => {
                            return note !== undefined;
                        });

                        this.props.valueStore.updateNote(currentNote[0].id, newNote);
                        this.props.history.push("/updateNote/" + noteIdBoundary)
                    }}
                >Update Note</Button>
            </FormControl>
            </>
            }
        }
        return (
            <>
                <ValidationError message={this.context.errorMsg} />
                    <Container>

                    <form className="update-entry-form">
                        {innerForm}
                    </form>
                    {form}
                    </Container>
            </>
        )
    }
}

export default withRouter(Update);