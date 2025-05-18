import React from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import useAccommodations from "../../../hooks/useAccommodations.js";
import AccommodationGrid from "../../components/accommodations/AccommodationsGrid/AccommodationsGrid.jsx";
//import AddProductDialog from "../../components/products/AddProductDialog/AddProductDialog.jsx";

const AccommodationPage = () => {
    const {accommodations, loading, onEdit, onDelete} = useAccommodations();

    return (
        <>
            <Box className="products-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary">
                                Add Product
                            </Button>
                        </Box>
                        <AccommodationGrid accommodation={accommodations} onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            {/*<AddProductDialog*/}
            {/*    open={addProductDialogOpen}*/}
            {/*    onClose={() => setAddProductDialogOpen(false)}*/}
            {/*    onAdd={onAdd}*/}
            {/*/>*/}
        </>
    );
};

export default AccommodationPage;
