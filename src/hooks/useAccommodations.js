import {useCallback, useEffect, useState} from "react";
import accommodationRepository from "../repository/accommodationRepository.js";

const initialState = {
    "accommodations" : [],
    "loading": true
};

const useAccommodations = () => {
    const [state, setState] = useState(initialState)

    const fetchAccommodations = useCallback(() => {
        setState(initialState);
        accommodationRepository
            .findAll()
            .then((response) => {
                setState({
                    "accommodations": response.data,
                    "loading" : false
                })
            })
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        fetchAccommodations();
    }, [fetchAccommodations]);

    return {...state}
};

export default useAccommodations;