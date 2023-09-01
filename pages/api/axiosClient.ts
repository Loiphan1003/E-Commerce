import axios from "axios";

const axiosClient = axios.create({
    headers: {
        'content-type': 'application/json',
        // 'Access-Control-Allow-Origin' : '*',
    },
})

axios.interceptors.response.use(function (response) {
    if(response && response.data){
        return response.data;
    }
    return response;
}, function (error) {

    return Promise.reject(error);
});

export default axiosClient;