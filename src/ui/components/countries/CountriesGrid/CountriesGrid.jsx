import React from 'react';
import {Grid} from "@mui/material";
import CountriesCard   from "../CountriesCard/CountriesCard.jsx";

const CountryGrid = ({countries, onEdit, onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {countries.map((country) => (
                <Grid key={country.id} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
                    <CountriesCard country={country} onEdit={onEdit} onDelete={onDelete}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default CountryGrid;
