import axiosInstance from "../axios/axios.js";

const hostRepository = {
    findAll: async () => {
        return await  axiosInstance.get("/hosts")
    },
    add: async (data) => {
        return await axiosInstance.post("/hosts/add", data);
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/hosts/delete/${id}`);
    },
    findById: async (id) => {
        return await axiosInstance.get(`/hosts/${id}`)
    },
    edit: async (id, data) => {
        return await axiosInstance.put(`/hosts/edit/${id}`,data)
    }

};

export default hostRepository;