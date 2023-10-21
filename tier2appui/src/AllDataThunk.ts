import { Filter } from './Filter';
import { createAsyncThunk } from "@reduxjs/toolkit"
import TierApi from "./TierApi";
import { TierDataPaged, TierDataPagedForUser } from "./TierData";

export const getAllCompanies = createAsyncThunk<TierDataPaged,Filter>(
    'tierData/all',
    async ({page,rowsPerPage, company, town, industry, sortBy }:Filter): Promise<TierDataPaged>=> 
    {
        const apiClient = new TierApi();
        const response= await apiClient.GetTier2All(page, rowsPerPage, company, town, industry, sortBy);
       return response.data;
    }
  )

  export const  getAllCompaniesCount = createAsyncThunk<number,void>(
    'tierData/allCount',
    async (): Promise<number>=> 
    {
        const apiClient = new TierApi();
        const response= await apiClient.GetTier2AllCount();
       return response.data;
    }
  )

  
export const getAllCompaniesForUser = createAsyncThunk<TierDataPagedForUser,Filter>(
    'tierData/allForUser',
    async ({page,rowsPerPage, company, town, industry, sortBy}:Filter): Promise<TierDataPagedForUser>=> 
    {
        const apiClient = new TierApi();
        const response= await apiClient.GetTier2AllForUser(page, rowsPerPage, company, town, industry, sortBy);
       return response.data;
    }
  )