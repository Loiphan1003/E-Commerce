import { BannerSlideAPI, HeaderMenuAPI } from "@/pages/api";
import { Banner, HeaderMenu } from "@/type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHeaderMenuData = createAsyncThunk(
    "GET: Header Mennu",
    async () => {
        try {
            const res = await HeaderMenuAPI.get();
            return res.data;
        } catch (error) {
            const data: HeaderMenu[] = [];
            console.error("Fetch Error:", error);
            return data;
        }
    }
);

export const getBannerSlideData = createAsyncThunk(
    "GET: Banner Slide",
    async () => {
        try {
            const res = await BannerSlideAPI.get();
            return res.data;
        } catch (error) {
            const data: Banner[] = [];
            console.error("Fetch Error:", error);
            return data;
        }
    }
);