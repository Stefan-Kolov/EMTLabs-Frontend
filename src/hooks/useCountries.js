import {useEffect, useState} from "react";
import countryRepository from "../repository/countryRepository.js";

const useCountries = () => {
    const [countries, setCounties] = useState([])

    useEffect(() => {
        countryRepository
            .findAll()
            .then((response) => {
                setCounties((response.data))
            })
            .catch((error) => console.log(error))
    }, []);

    return countries;

};

export default useCountries;