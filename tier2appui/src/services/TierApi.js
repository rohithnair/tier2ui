import { axiosCaller } from '../AxiosSettings';
class TierApi
{

    async GetRecentTier2Providers()
    {
              return await axiosCaller.post('/mostrecent');
    }
}
export default TierApi;