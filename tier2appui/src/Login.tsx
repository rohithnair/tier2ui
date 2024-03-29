import { useEffect } from "react";
import { baseAuthURL } from "./AxiosSettings";

const Login=() => {

    useEffect(() => {
        const timeout = setTimeout(() => {
          window.location.href= baseAuthURL+'/login?returnUrl=https://uktiersponsors.co.uk/callback';
        }, 3);
    
        return () => clearTimeout(timeout);
      }, []);
      return(<></>)
}
export default Login;