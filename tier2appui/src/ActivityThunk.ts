import { UserActivity } from './UserActivity';
import { createAsyncThunk } from "@reduxjs/toolkit"
import TierApi from "./TierApi";
 

export const addActivity = createAsyncThunk<void,UserActivity>(
    'activity/add',
    async ({organisationId, activity}:UserActivity): Promise<void>=> 
    {
        const apiClient = new TierApi();
         await apiClient.AddActivity(organisationId, activity);
    }
  )

  export const clearActivity = createAsyncThunk<void,number>(
    'activity/clear',
    async (organisationId:number): Promise<void>=> 
    {
        const apiClient = new TierApi();
        await apiClient.RemoveActivity(organisationId);
    }
  )
