import { axiosCaller } from '../AxiosSettings';

class TierApi
{

    async GetRecentTier2Providers()
    {
              return await axiosCaller.post('tierDataRecent/Companies');
    }


    async GetTier2DeletedCount()
    {
              return await axiosCaller.get('tierDataDeleted/Count');
    }


    async GetTier2Deleted(pageNumber,rowsPerPage,searchText =null)
    {
           let params = {
PageNumber: pageNumber,
RowsPerPage : rowsPerPage,
Text:searchText
           };
              return await axiosCaller.post('tierDataDeleted/Companies',params,{
                headers: {
                    'Content-Type': 'application/json',
                }});
    

}
}
export default TierApi;