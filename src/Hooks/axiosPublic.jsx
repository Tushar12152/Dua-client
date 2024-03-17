import axios from "axios";


const result=axios.create({
    baseURL: 'http://localhost:5002/'
  });

const axiosPublic = () => {
    return result;
};

export default axiosPublic;