import React from 'react';
import {useNavigate, useParams} from "react-router";
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Divider,
    Grid,
    Typography,
    Paper,
    Avatar,
    Stack,
    Rating,
    Breadcrumbs,
    Link
} from "@mui/material";
import {
    ArrowBack,
    Category,
    Factory,
    Star,
    ShoppingCart,
    FavoriteBorder,
    Share
} from "@mui/icons-material";
import useAccommodationDetails from "../../../../hooks/useAccommodationDetails.js";

const AccommodationDetails = () => {
    const {id} = useParams();
    const {accommodation, host,country} = useAccommodationDetails(id);
    const navigate = useNavigate();

    if (!accommodation || !host) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh'}}>
                <CircularProgress/>
            </Box>
        );
    }

    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{mb: 3}}>
                <Link
                    underline="hover"
                    color="inherit"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/accommodations");
                    }}
                >
                    Accommodations
                </Link>
                <Typography color="text.primary">{accommodation.name}</Typography>
            </Breadcrumbs>

            <Paper elevation={2} sx={{p: 4, borderRadius: 4}}>
                <Grid container spacing={4}>
                    <Grid size={{xs: 12, md: 9}}>
                        <Box sx={{mb: 3}}>
                            <Typography variant="h3" gutterBottom sx={{fontWeight: 600}}>
                                {accommodation.name}
                            </Typography>
                            <Typography variant="h4" gutterBottom sx={{fontWeight: 600}}>
                                Category: {accommodation.category}
                            </Typography>

                            <Typography variant="h4" gutterBottom sx={{fontWeight: 600}}>
                                Rooms Available: {accommodation.numRooms}
                            </Typography>

                            <Typography variant="h4" gutterBottom sx={{fontWeight: 600}}>
                                Host: {host.name} - {host.surname}
                            </Typography>
                            <Typography variant="h4" gutterBottom sx={{fontWeight: 600}}>
                                Country: {host.country.name} - {host.country.continent}
                            </Typography>

                            <Stack direction="row" spacing={1} sx={{mb: 3}}>
                                <Chip
                                    icon={<Category/>}
                                    label={host.name}
                                    color="primary"
                                    variant="outlined"
                                    sx={{p: 2}}
                                />
                                <Chip
                                    label={accommodation.reserved ? "Reserved" : "Available"}
                                    color={accommodation.reserved ? "error" : "success"}
                                    variant="outlined"
                                />
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid size={12} display="flex" justifyContent="space-between">
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                startIcon={<FavoriteBorder/>}
                            >
                                Wishlist
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<Share/>}
                            >
                                Share
                            </Button>
                        </Stack>
                        <Button
                            variant="outlined"
                            startIcon={<ArrowBack/>}
                            onClick={() => navigate("/accommodations")}
                        >
                            Back to Accommodations
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default AccommodationDetails;
