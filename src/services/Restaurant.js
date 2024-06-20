import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getRestaurantSectionData = async () => {
    const res = await axios.get(`${apiUrl}/restaurant`); 
    return res.data;
}

export const  updateRestaurantSectionData = async(rest) => {
    const res = await axios.patch(`${apiUrl}/restaurant`, rest, {new: true});
    return res.data;
}