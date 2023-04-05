import { useEffect } from "react";
import { baseAuthURL } from "./AxiosSettings";

const Logout=() => {

    useEffect(() => {
        const timeout = setTimeout(() => {
          // 👇️ redirects to an external URL
          window.location.href= baseAuthURL+'/logout?returnUrl=https://uktiersponsors.co.uk';
        }, 3);
    
        return () => clearTimeout(timeout);
      }, []);

      return(<></>)
}
export default Logout;