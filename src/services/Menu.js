import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getMenuSectionData = async () => {
    const res = await axios.get(`${apiUrl}/menu`); 
    return res.data;
}

export const  updateMenuSectionData = async(menu) => {
    const res = await axios.patch(`${apiUrl}/menu`, menu, {new: true});
    return res.data;
}

export const getMenuCarouselData = async () => {
    const res = await axios.get(`${apiUrl}/menuCarousel`); 
    return res.data;
}