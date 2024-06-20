import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getConceptSectionData = async () => {
    const res = await axios.get(`${apiUrl}/concept`); 
    return res.data;
}

export const  updateConceptSectionData = async(concept, token) => {
    const res = await axios.patch(`${apiUrl}/concept`, concept, {
        new: true,
        headers: {
            'Authorization': token
        }
    });
    return res.data;
}