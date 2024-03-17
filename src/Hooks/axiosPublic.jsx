import axios from "axios";


const result=axios.create({
    baseURL: 'https://dua-server-side-mocha.vercel.app/'
  });

const useAxiosPublic = () => {
    return result;
};

export default useAxiosPublic;