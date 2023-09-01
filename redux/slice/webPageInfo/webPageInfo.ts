import { Banner, HeaderMenu } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBannerSlideData, getHeaderMenuData } from "./asyncThunks";

interface WebPageInfoState {
    headerMenu: HeaderMenu[] | undefined;
    bannerSlice: Banner[] | undefined;
    loading: boolean;
}

const initialState: WebPageInfoState = {
    headerMenu: [],
    bannerSlice: [],
    loading: false,
};


const webPageInfo = createSlice({
    name: "WebPageInfo",
    initialState: initialState,
    reducers: {
        // Define your reducer actions here
        // ...
    },
    extraReducers(builder) {
        builder.addCase(getHeaderMenuData.fulfilled, (state, action) => {
            state.headerMenu = action.payload;
        });
        builder.addCase(getBannerSlideData.fulfilled, (state, action) => {
            state.bannerSlice = action.payload;
        })
    },
});

export const { actions } = webPageInfo;
export default webPageInfo.reducer;
