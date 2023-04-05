import { createSlice, Draft } from "@reduxjs/toolkit";
import { isNil } from "lodash";
import { addActivity, clearActivity } from "./ActivityThunk";
import { getAllCompanies, getAllCompaniesCount, getAllCompaniesForUser } from "./AllDataThunk";
import { ActivityFlag, TierData, TierDataWithActivity } from "./TierData";
 

type AllDataStateType = {
    tierDataList: TierData[] | TierDataWithActivity[],
    count: number
}
const initialTierDataState : AllDataStateType = {
count :0 ,
tierDataList: []
};

const allDataSlice = createSlice({
    name: 'allData',
    initialState:initialTierDataState,
    reducers: {
  },
  extraReducers: (builder) => {
        builder
          .addCase(getAllCompanies.fulfilled, (state, action) => {
             state.tierDataList = action.payload.companies;
             state.count = action.payload.count;
          })
          .addCase(getAllCompaniesCount.fulfilled, (state, action) => {
            state.count = action.payload;
         })
         .addCase(getAllCompaniesForUser.fulfilled, (state, action) => {
            state.tierDataList = action.payload.companies;
            state.count = action.payload.count;
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
export default allDataSlice.reducer;
  