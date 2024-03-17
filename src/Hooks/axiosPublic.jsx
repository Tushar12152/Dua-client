import axios from "axios";


const result=axios.create({
    baseURL: 'http://localhost:5002/'
  });

const useAxiosPublic = () => {
    return result;
};

export default useAxiosPublic;