import axiosInstance from "../axios/axios.js";


const accommodationRepository = {
    findAll: async () => {
        return await axiosInstance.get("/commodations")
    }
}

export default accommodationRepository;