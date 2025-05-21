import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";

import useHosts from "../../../../hooks/useHosts.js";

const EditAccommodationDialog = ({open, onClose,accommodation, onEdit}) => {
    const [formData, setFormData] = useState({
        "name" : accommodation.name,
        "category" : accommodation.category,
        "host" : accommodation.host,
        "numRooms" : accommodation.numRooms
    });

    const categories = ['ROOM','FLAT','HOUSE','APARTMENT','HOTEL', 'MOTEL'];
    const {hosts} = useHosts();

    const handleChange = (event) => {
        const { name, value } = event.target;
        const parsedValue = name === "numRooms" ? parseInt(value || "0", 10) : value;
        setFormData({ ...formData, [name]: parsedValue });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.category || !formData.host || !formData.numRooms) {
            alert("Please fill out all fields.");
            return;
        }
        onEdit(accommodation.id,formData);
        setFormData(formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Accommodation</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Category</InputLabel>
                    <Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        label="Category"
                        variant="outlined"
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="dense">
                    <InputLabel>Host</InputLabel>
                    <Select
                        name="host"
                        value={formData.host}
                        onChange={handleChange}
                        label="Host"
                        variant="outlined">
                        {hosts.map((host) => (
                            <MenuItem key={host.id} value={host.id}>{host.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    margin="dense"
                    label="Number of rooms"
                    name="numRooms"
                    type="number"
                    value={formData.numRooms}
                    onChange={handleChange}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Update</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditAccommodationDialog;
