import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";
import AllDataSlice from "./AllDataSlice"
import RecentDataSlice from "./RecentDataSlice";

 
 
const store = configureStore({
  reducer: {
    tierDataAll: AllDataSlice,
    tierDataRecent: RecentDataSlice
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>
export default store