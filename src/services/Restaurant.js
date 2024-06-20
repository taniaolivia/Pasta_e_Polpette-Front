import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getRestaurantSectionData = async () => {
    const res = await axios.get(`${apiUrl}/restaurant`); 
    return res.data;
}

export const  updateRestaurantSectionData = async(rest,token) => {
    const res = await axios.patch(`${apiUrl}/restaurant`, rest,
         {new: true,
            headers: {
                'Authorization': token
            }

         });
    return res.data;
}