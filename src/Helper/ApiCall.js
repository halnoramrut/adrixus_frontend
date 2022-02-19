import axios from "axios";

const baseUrl = "http://localhost:8000/"; //process.env.BASE_URL;

export const login = async(credentials) => {
    try {
        return await axios.post(`${baseUrl}login`,credentials);
    } catch (error) {
        throw error;
    }
} 

export const doRegister = async(details) => {
    try {
        return await axios.post(`${baseUrl}register`,details);
    } catch (error) {
        throw error;
    }
}

export const fetchDummyUser = async (pageNo,size) => {
    try {
        return await axios.get(`${baseUrl}getdummyuser?pageNo=${pageNo}&size=${size}`)
    } catch (error) {
        throw error;
    }
}

export const search = async(text) => {
    try {
        return await axios.get(`${baseUrl}search?text=${text}`);
    } catch (error) {
        throw error;
    }
}