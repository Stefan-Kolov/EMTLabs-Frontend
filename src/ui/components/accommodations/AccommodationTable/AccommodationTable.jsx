import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router";

const AccommodationTable = ({accommodation, onEdit, onDelete}) => {
    const navigate = useNavigate();

    return (
        <TableContainer component={Paper} sx={{borderRadius: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Reserved</TableCell>
                        <TableCell>Number of Rooms</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accommodation.map((acc) => (
                        <TableRow key={acc.id}>
                            <TableCell>{acc.name}</TableCell>
                            <TableCell>{acc.category}</TableCell>
                            <TableCell>{acc.reserved ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{acc.numRooms}</TableCell>
                            <TableCell align="right">
                                <Button size="small" color="info" startIcon={<InfoIcon />} onClick={() => navigate(`/accommodations/${acc.id}`)}>
                                    Info
                                </Button>
                                <Button size="small" color="warning" startIcon={<EditIcon />} onClick={() => onEdit(acc)}>
                                    Edit
                                </Button>
                                <Button size="small" color="error" startIcon={<DeleteIcon />} onClick={() => onDelete(acc)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AccommodationTable;
