import React from 'react';
import { TableRow, TableCell, Button } from '@material-ui/core';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

export default function buildNoteRows(input, history) {
    return input.map(note => {
        return <TableRow key={Math.random()}>
        <TableCell component="th" scope="row" key={Math.random()}>
            {note.id}
        </TableCell>
        <TableCell key={Math.random()}>{note.name}</TableCell>
        <TableCell key={Math.random()}>{note.modified}</TableCell>
        <TableCell key={Math.random()} >{note.content.substr(0, 125) + "..."}</TableCell>                            
        <TableCell key={Math.random()}>
                <Button 
                    variant="contained"
                    startIcon={<EditTwoToneIcon />}
                    onClick={(e) => {
                        history.push("/updateNote/" + note.id);
                    }}
                >Edit</Button>
        </TableCell>                                   
    </TableRow>
    });
}