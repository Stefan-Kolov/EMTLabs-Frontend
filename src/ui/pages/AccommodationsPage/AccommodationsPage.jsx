import React, {useState} from 'react';
import {Box, Button, CircularProgress, FormControlLabel, Switch} from "@mui/material";
import useAccommodations from "../../../hooks/useAccommodations.js";
import AccommodationGrid from "../../components/accommodations/AccommodationsGrid/AccommodationsGrid.jsx";
import AddAccommodationDialog from "../../components/accommodations/AddAccommodationDialog/AddAccommodationDialog.jsx";
import AccommodationTable from "../../components/accommodations/AccommodationTable/AccommodationTable.jsx";

const AccommodationPage = () => {
    const {accommodations, loading, onAdd, onEdit, onDelete} = useAccommodations();
    const [addAccommodationDialogOpen, setAddAccommodationDialogOpen] = useState(false);
    const [gridView, setGridView] = useState(true);

    return (
        <>
            <Box className="products-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading && (
                    <>
                        <Box sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={gridView}
                                        onChange={() => setGridView(!gridView)}
                                        color="primary"
                                    />
                                }
                                label={gridView ? "Grid View" : "Table View"}
                            />
                            <Button variant="contained" color="primary" onClick={() => setAddAccommodationDialogOpen(true)}>
                                Add Accommodation
                            </Button>
                        </Box>
                        {gridView ? (
                            <AccommodationGrid accommodation={accommodations} onEdit={onEdit} onDelete={onDelete}/>
                        ) : (
                            <AccommodationTable accommodation={accommodations} onEdit={onEdit} onDelete={onDelete}/>
                        )}
                    </>
                )}
            </Box>
            <AddAccommodationDialog
                open={addAccommodationDialogOpen}
                onClose={() => setAddAccommodationDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default AccommodationPage;
