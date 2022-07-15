import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from './Components/Signup';
import Login from './Components/Login';
import Feed from './Components/Feed';
import Response from './Components/Response';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './Components/privateroute';
import Home from './Components/Home';
import ItemPage from './Components/ItemPage';
import MyListings from './Components/MyListings';
import { ToastProvider } from 'react-toast-notifications';
window.OneSignal = window.OneSignal || [];
const OneSignal = window.OneSignal;

function App()
{
  useEffect(()=>{
    OneSignal.push(()=> {
      OneSignal.init(
        {
          appId: "fe13c665-7830-497e-9a3f-27a523840baf", //STEP 9
      
        welcomeNotification: {
          "title": "One Signal",
          "message": "Thanks for subscribing!",
        } 
      },
        //Automatically subscribe to the new_app_version tag
        // OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
        //   // Callback called when tag has finished sending
        //   console.log('new_app_version TAG SENT', tagsSent);
        // })
      );
    });
  },[])
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/log-in' element={<Login/>} />
        <PrivateRoute path='/feed' element={<Feed/>}  />
        <Route path='/mylistings'  element={<MyListings/>}  />
        <Route path='/responses' element={<Response/>}  />
        <ToastProvider autoDismiss={true} placement={"bottom-right"}>

          <Route path='/:item'  element={<ItemPage/>}  />
        </ToastProvider>
        {/* <Route path='*' element={NotFound}/> */}
      </Routes>
    </Router>
    {/* <Signup/> */}
    </>

  )
}

export default App