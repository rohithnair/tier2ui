import { useEffect } from "react";

const Logout=() => {

    useEffect(() => {
        const timeout = setTimeout(() => {
          // 👇️ redirects to an external URL
          window.location.href= process.env.REACT_APP_BaseAuthUrl+'/logout?returnUrl='+process.env.REACT_APP_MainUrl;
        }, 3);
    
        return () => clearTimeout(timeout);
      }, []);

      return(<></>)
}
export default Logout;