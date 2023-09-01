import { configureStore } from "@reduxjs/toolkit";

import webPageInfo from "./slice/webPageInfo/webPageInfo";

const store = configureStore({
    reducer: {
        WebPageInfo: webPageInfo
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
