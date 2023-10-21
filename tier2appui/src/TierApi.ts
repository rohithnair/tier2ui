import { TierData, TierDataPaged, TierDataPagedForUser, TierDataWithActivity, ActivityFlag } from './TierData';
import { axiosCaller, axiosCallerForAuth, axiosCallerForTierDataWithActivity } from './AxiosSettings';
import { AxiosResponse } from 'axios';
import { User } from './User';

class TierApi
{

    async GetRecentTier2Providers() : Promise<AxiosResponse<TierData[]>>
    {
              return await axiosCaller.post('/tierDataRecent/Companies');
    }

    async GetRecentTier2ProvidersForUser() : Promise<AxiosResponse<TierDataWithActivity[]>>
    {
              return await axiosCallerForTierDataWithActivity.post('/tierDataRecent/CompaniesForUser');
    }

    async GetTier2DeletedCount() : Promise<AxiosResponse<number>>
    {
              return await axiosCaller.get('/tierDataDeleted/Count');
    }

    async GetTier2AllCount() :  Promise<AxiosResponse<number>>
    {
              return await axiosCaller.get('/tierData/Count');
    }


    async GetTier2Deleted(pageNumber: number,rowsPerPage: number,company: string,town: string,industry: string, sortBy: number) :  Promise<AxiosResponse<TierDataPaged>>
    {
           let params = {
                    PageNumber: pageNumber,
                    RowsPerPage : rowsPerPage,
                    Company:company,
                    Town:town,
                    Industry:industry,
                    SortBy: sortBy
           };
              return await axiosCaller.post('/tierDataDeleted/Companies',params,{
                headers: {
                    'Content-Type': 'application/json',
                }});
}

async GetTier2All(pageNumber: number,rowsPerPage: number,company: string,town: string,industry: string, sortBy: number) : Promise<AxiosResponse<TierDataPaged>>
{
  let params = {
                PageNumber: pageNumber,
                RowsPerPage : rowsPerPage,
                Company:company,
                Town:town,
                Industry:industry,
                SortBy: sortBy
               };
          return await axiosCaller.post('/tierData/Companies',params,{
            headers: {
                'Content-Type': 'application/json',
            }});
}

async GetTier2AllForUser(pageNumber: number,rowsPerPage: number,company: string,town: string,industry: string, sortBy: number) : Promise<AxiosResponse<TierDataPagedForUser>>
{
  let params = {
                PageNumber: pageNumber,
                RowsPerPage : rowsPerPage,
                Company:company,
                Town:town,
                Industry:industry,
                SortBy: sortBy
               };
          return await axiosCallerForTierDataWithActivity.post('/tierData/companiesforuser',params,{
            headers: {
                'Content-Type': 'application/json',
            }})
}

async GeUserDetails() : Promise<AxiosResponse<User>> {
   return await axiosCallerForAuth.get('/user');
}

async AddActivity(organisationId:number, contactedOrNot:ActivityFlag) : Promise<AxiosResponse<void>> {
  let params = {organisationId, contactedOrNot
 
  }
  
  return await axiosCallerForTierDataWithActivity.post('/activity',params, {
    headers: {
    'Content-Type': 'application/json',
  }});
}
async RemoveActivity(organisationId: number) : Promise<AxiosResponse<void>> {
 const oId= organisationId.toString();
  return await axiosCallerForTierDataWithActivity.delete('/activity/'+oId);
}

}
export default TierApi;