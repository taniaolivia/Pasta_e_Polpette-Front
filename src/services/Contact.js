import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getContactSectionData = async () => {
    const res = await axios.get(`${apiUrl}/contact`); 
    return res.data;
}

export const  updateContactSectionData = async(contact) => {
    const res = await axios.patch(`${apiUrl}/contact`, contact, {new: true});
    return res.data;
}

export const sendEmail = async(data) => {
    const res = await axios.patch(`${apiUrl}/contact/sendEmail`, data, {new: true});
    return res.data;
}