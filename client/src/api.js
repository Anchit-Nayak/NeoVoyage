import axios from 'axios';

const getServices = async (data) => {
    const response = await axios.post('http://localhost:3000/service/filter', data);
    return response.data;
}

export {getServices}