import { createSlice, Draft } from "@reduxjs/toolkit";
import { isNil } from "lodash";
import { addActivity, clearActivity } from "./ActivityThunk";
import { getAllRecentCompanies, getAllRecentCompaniesForUser } from "./RecentDataThunk";
import { ActivityFlag, TierData, TierDataWithActivity } from "./TierData";

type RecentDataStateType = {
    tierDataList: TierData[] | TierDataWithActivity[],
    count: number
}
const initialTierDataState : RecentDataStateType = {
count :0 ,
tierDataList: []
};

const recentDataSlice = createSlice({
    name: 'recentData',
    initialState:initialTierDataState,
    reducers: {

  },
  extraReducers: (builder) => {
        builder
          .addCase(getAllRecentCompanies.fulfilled, (state, action) => {
             state.tierDataList = action.payload;
             state.count = action.payload.length;
          })
         .addCase(getAllRecentCompaniesForUser.fulfilled, (state, action) => {
            state.tierDataList = action.payload;
            state.count = action.payload.length;
         })
         .addCase(addActivity.fulfilled, (state, action) => {
            const tierData = (state.tierDataList as Draft<TierDataWithActivity>[]).find(s=>s.id === action.meta.arg.organisationId);
            if(!isNil(tierData)) {
                tierData.contactActivityFlag =  action.meta.arg.activity;
                tierData.contactActivityDate = new Date();
            }
         })
         .addCase(clearActivity.fulfilled, (state, action) => {
            const tierData = (state.tierDataList as Draft<TierDataWithActivity>[]).find(s=>s.id === action.meta.arg);
            if(!isNil(tierData)) {
                tierData.contactActivityFlag =  ActivityFlag.None;
            }
         })
  }
});

export default recentDataSlice.reducer;
  