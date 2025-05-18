import {useEffect, useState} from "react";
import hostRepository from "../repository/hostRepository.js";

const useHosts = () => {
    const [hosts, setHosts] = useState([]);

    useEffect(() => {
        hostRepository
            .findAll()
            .then((response) => {
                setHosts(response.data)
            })
            .catch((error) => console.log(error))
    }, []);

    return hosts;
}

export default useHosts;