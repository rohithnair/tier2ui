import { axiosCaller } from '../AxiosSettings';

class TierApi
{

    async GetRecentTier2Providers()
    {
              return await axiosCaller.post('tierData/MostRecent');
    }


    async GetTier2DeletedCount()
    {
              return await axiosCaller.get('tierDataDeleted/Count');
    }

    async GetTier2Deleted(pageNumber,rowsPerPage)
    {
           let params = {
PageNumber: pageNumber,
RowsPerPage : rowsPerPage
           };
              return await axiosCaller.post('tierDataDeleted/Companies',params,{
                headers: {
                    'Content-Type': 'application/json',
                }});
    

}
}
export default TierApi;