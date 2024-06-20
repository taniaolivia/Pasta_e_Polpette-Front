import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getBannerSectionData = async () => {
    const res = await axios.get(`${apiUrl}/banner`); 
    return res.data;
}

export const  updateBannerSectionData = async(banner) => {
    const res = await axios.patch(`${apiUrl}/banner`, banner, {new: true});
    return res.data;
}