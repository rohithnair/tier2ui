import { useCallback, useEffect } from "react";
import { useAuth } from "./AuthContext";
import TierApi from "./TierApi";
import { useNavigate } from "react-router-dom";

const AuthCallBack = () => {

    const {setAuthenticatedUserDetails, logout} = useAuth();
    const  navigate = useNavigate() ;

    const fetchUserDetails = useCallback(async () => {
        const apiClient = new TierApi();
      try {
            const response = await apiClient.GeUserDetails();
            setAuthenticatedUserDetails(response.data);
            navigate("/", {replace:true});
      }
      catch(e)
       {
        logout();
        console.log(e);
      }
        
      },[logout, navigate,setAuthenticatedUserDetails]);   

      useEffect(() => {
        fetchUserDetails()
        .catch(console.error);
    }, [fetchUserDetails]);

      return(<></>)
}

export default AuthCallBack