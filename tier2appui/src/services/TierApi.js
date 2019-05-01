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

    async GetTier2AllCount()
    {
              return await axiosCaller.get('tierData/Count');
    }


    async GetTier2Deleted(pageNumber,rowsPerPage,industry,searchText)
    {
           let params = {
                    PageNumber: pageNumber,
                    RowsPerPage : rowsPerPage,
                    Text:searchText,
                    Industry:industry   
           };
              return await axiosCaller.post('tierDataDeleted/Companies',params,{
                headers: {
                    'Content-Type': 'application/json',
                }});
    

}

async GetTier2All(pageNumber,rowsPerPage,industry,searchText)
{
  let params = {
                PageNumber: pageNumber,
                RowsPerPage : rowsPerPage,
                Text:searchText,
                Industry:industry
               };
          return await axiosCaller.post('tierData/Companies',params,{
            headers: {
                'Content-Type': 'application/json',
            }});
}
}
export default TierApi;