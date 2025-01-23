import { useEffect } from "react";

const Login=() => {

    useEffect(() => {
        const timeout = setTimeout(() => {
          window.location.href= process.env.REACT_APP_BaseAuthUrl+'/login?returnUrl='+ process.env.REACT_APP_AuthenticationReturnUrl;
        }, 3);
    
        return () => clearTimeout(timeout);
      }, []);
      return(<></>)
}
export default Login;