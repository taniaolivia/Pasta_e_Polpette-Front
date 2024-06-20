import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getBannerSectionData = async () => {
    const res = await axios.get(`${apiUrl}/banner`); 
    return res.data;
}

export const  updateBannerSectionData = async(description, token) => {
    const res = await axios.patch(`${apiUrl}/banner`, { description }, {
        new: true,
        headers: {
            'Authorization': token
        }
    });
    console.log("resss")
    console.log(res.data)
    return res.data;
}