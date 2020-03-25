import React, { Component } from 'react';
import uuid from "uuid";
import { FormControl, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormHelperText, TextField, Table, Paper, TableBody, TableHead, TableContainer, TableRow, TableCell, Container, Button } from '@material-ui/core';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import ValidationError from '../../comps/validationErr';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SiteContext from '../Context';
import './Update.css';

class Update extends Component {
    static contextType = SiteContext;
    constructor(props) {
        super(props);

        this.state = {
            folderNotes: [],
            selectedFolder: "",
            selectedFolderId: "",
            selectedFolderIdOld: "",
            oldNoteId: null,
            currentNoteId: null,
            migrateChecked: false,
            note: {
                id: null,
                name: null,
                folderid: null,
                modified: null,
                content: null
            },
        }
    }

    validateForm(type) {
        if (type === 'note') {

        }
        if (type === 'folder') {
            
        }
    }

    render() {
        let innerForm;
        let form;
        let folders;
        let folderNotes;
        let currentNote;

        if (this.context.done === true) {
            folders = this.context.folders.map(folder => {
                return <MenuItem key={Math.random()} value={folder.name} id={folder.folder_id} >{folder.name}</MenuItem>
            });
        }

        if (this.props.updateType === "folder") {
            innerForm = <>
                <FormControl className="select-folder-form-control">
                    <InputLabel id="select-folder-label">Select</InputLabel>
                        <Select
                        labelId="select-folder-label"
                        id="select-folder"
                        className="select-folder"
                        multiline
                        value={this.state.selectedFolder}
                        onChange={(e) => {
                            folderNotes = this.context.notes.filter(note => {
                                if (note.folderid === e._targetInst.stateNode.id) {
                                    return note;
                                }
                            })
                            this.setState({
                                selectedFolderId: e._targetInst.stateNode.id,
                                selectedFolderIdOld: e._targetInst.stateNode.id,
                                selectedFolder: e._targetInst.stateNode.textContent,
                                folderNotes: folderNotes.map(note => {
                                    return <TableRow key={note.id}>
                                    <TableCell component="th" scope="row">
                                        {note.id}
                                    </TableCell>
                                    <TableCell>{note.name}</TableCell>
                                    <TableCell>{note.modified}</TableCell>
                                    <TableCell>{note.content.substr(0, 125) + "..."}</TableCell>                            
                                    <TableCell>
                                            <Button 
                                                variant="contained"
                                                startIcon={<EditTwoToneIcon />}
                                                onClick={(e) => {
                                                    this.props.history.push("/updateNote/" + note.id);
                                                }}
                                            >Edit</Button>
                                    </TableCell>                                   
                                </TableRow>
                                })
                            })
                            this.context.updateType = "folder";
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
                        value={this.state.selectedFolder}
                        onChange={(e) => {
                            this.setState({
                                selectedFolder: e.target.value
                            });
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
                        value={this.state.selectedFolderId}
                    />
                </FormControl>
                <FormControl className="migrate-notes-checkbox-form-control">
                    <FormControlLabel
                        labelPlacement="start"
                        className="migrate-notes-checkbox-form-control-label"
                        control={
                        <Checkbox
                            checked={this.state.migrateChecked}
                            onChange={(e) => {
                                this.setState({
                                    migrateChecked: e.target.checked
                                })
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
                                this.setState({
                                    selectedFolderId: uuid.v4(),
                                })
                            }}
                        >Change ID</Button>
                        <FormHelperText>Generate New GUID (nothing committed until you hit update)</FormHelperText>
                        <Button 
                            variant="contained" 
                            onClick={(e) => {
                                const updatedInfo = {
                                    folder_id: this.state.selectedFolderId,
                                    name: this.state.selectedFolder
                                }
                                if (this.state.migrateChecked === true) {
                                    folderNotes = this.context.notes.filter(note => {
                                        if (note.folderid === this.state.selectedFolderIdOld) {
                                            return note;
                                        }
                                    })
                                    folderNotes.forEach((note) => {
                                        let update = {folderid: this.state.selectedFolderId}
                                        this.context.updateNote(note.id, update)
                                    });
                                }
                                if(this.state.migrateChecked === false) {
                                    folderNotes = this.context.notes.filter(note => {
                                        if (note.folderid === this.state.selectedFolderIdOld) {
                                            return note;
                                        }
                                    })
                                    folderNotes.forEach((note) => {
                                        this.context.deleteNote(note.id)
                                    });
                                }
                                this.context.updateFolder(this.state.selectedFolderIdOld, updatedInfo);
                                this.setState({
                                    selectedFolderIdOld: updatedInfo.folder_id,
                                })
                            }}
                        >Update Folder</Button>
                        <FormHelperText>Commit Changes to Database</FormHelperText>
                    </FormControl>
                </FormControl>

            </>;

            form = <TableContainer component={Paper}>
            <Table className="folder-note-list-table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Date Modified</TableCell>
                        <TableCell>Content Preview</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.folderNotes}
                </TableBody>
            </Table>
        </TableContainer>;

        }
        if (this.props.updateType === "note") {
            if (this.props.notes) {
                currentNote = this.props.notes.filter(note => {
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
                        if (this.state.currentNoteId !== null) {
                            return this.state.currentNoteId;
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
                    label="Name"
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
                    label="Note ID"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={date}
                />
                <TextField
                    id="note-content-input"
                    className="note-content-input"
                    label="Name"
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
                        let old = this.state.currentNoteId;
                        this.setState({
                            currentNoteId: uuid.v4(),
                            oldNoteId: old
                        })
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

                        oldNotesMap = this.props.notes.map(note => {
                            if (note.id !== currentNote[0].id) {
                                return note;
                            }
                        })

                        oldNotesMap.push(newNote);

                        this.context.notes = oldNotesMap.filter(note => {
                            return note !== undefined;
                        });

                        this.context.updateNote(currentNote[0].id, newNote);
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