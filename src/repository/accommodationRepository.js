import axiosInstance from "../axios/axios.js";


const accommodationRepository = {
    findAll: async () => {
        return await axiosInstance.get("/commodations")
    },
    add: async (data) => {
        return await axiosInstance.post("/commodations/add", data);
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/commodations/delete/${id}`)
    },
    findById: async (id) => {
        return await axiosInstance.get(`/commodations/${id}`)
    },
    edit: async (id,data) => {
        return await axiosInstance.put(`/commodations/edit/${id}`,data)
    }
}

export default accommodationRepository;