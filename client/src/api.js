import axios from 'axios';

const getServices = async (data) => {
    const response = await axios.post('http://localhost:3000/service/filter', data);
    return response.data;
}

const getServiceDetails = async (id) => {
    const response = await axios.get(`http://localhost:3000/service/serviceDetails/${id}`);
    return response.data;
}

const postReview = async (data) => {
    const response = await axios.post('http://localhost:3000/service/review', data);
    return response.data;
}

const rateService = async (data) => {
    const response = await axios.post('http://localhost:3000/service/rating',data)
    return response.data;
}

export {getServices, getServiceDetails, postReview, rateService}