
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import All from "./All";
import App from "./App";
import AuthCallBack from "./AuthCallBack";
import Deleted from "./Deleted";
import Layout from "./Layout";
import Login from "./Login";
import Logout from "./Logout";
import PrivacyPolicy from "./PrivacyPolicy";
import AboutUs from "./AboutUs";
import ReleaseNotes from "./ReleaseNotes";

 const RouteList:FC = () => {
     
    return (
 
        <BrowserRouter>
        <Routes>
        <Route  path="*" element={
             <Layout><All/></Layout>} >
        </Route>
        <Route  path="/" element={
             <Layout><All/></Layout>} >
        </Route>
        <Route  path="/recent" element={
             <Layout><App/></Layout>} >
        </Route>
        <Route  path="/all" element={
             <Layout><All/></Layout>} >
        </Route>
        <Route  path="/deleted" element={
             <Layout><Deleted/></Layout>} >
        </Route>
        <Route path= "/login" element = {<Login/> }/>

        <Route path= "/logout" element={<Logout/> }/>

        <Route path= "/callback" element={<Layout><AuthCallBack/></Layout> }/>

        <Route path= "/privacy-policy" element={<Layout><PrivacyPolicy/></Layout> }/>

        
        <Route path= "/about-us" element={<Layout><AboutUs/></Layout> }/>

                
        <Route path= "/release-notes" element={<Layout><ReleaseNotes/></Layout> }/>
        </Routes>
      </BrowserRouter>
    );
  }

export default RouteList;