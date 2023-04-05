import { createAsyncThunk } from "@reduxjs/toolkit"
import TierApi from "./TierApi";
import { TierData, TierDataWithActivity } from "./TierData";

export const getAllRecentCompanies = createAsyncThunk<TierData[]>(
    'tierDataRecent/all',
    async (): Promise<TierData[]>=> 
    {
        const apiClient = new TierApi();
        const response= await apiClient.GetRecentTier2Providers();
       return response.data;
    }
  )

  
export const getAllRecentCompaniesForUser = createAsyncThunk<TierDataWithActivity[],void>(
    'tierDataRecent/allForUser',
    async(): Promise<TierDataWithActivity[]>=> 
    {
        const apiClient = new TierApi();
        const response= await apiClient.GetRecentTier2ProvidersForUser();
       return response.data;
    }
  )