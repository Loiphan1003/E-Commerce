import axiosClient from "./axiosClient";

const baseURL = "http://localhost:8080/api";

export const HeaderMenuAPI = {
    get: () => {
        const url = `${baseURL}/HeaderMenu`;
        return axiosClient.get(url);
    },
};

export const BannerSlideAPI = {
    get: () => {
        const url = `${baseURL}/Slide`;
        return axiosClient.get(url);
    },
};


