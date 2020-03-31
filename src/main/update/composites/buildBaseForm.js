import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core'; 

export default function buildBaseForm(folderNotes) {
    const form = <TableContainer component={Paper}>
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
                {folderNotes}
            </TableBody>
        </Table>
    </TableContainer>;

    return form;
}
