import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <Box sx={{ border: "2px solid red", backgroundColor: "lightblue" }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        EMTLABS
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
