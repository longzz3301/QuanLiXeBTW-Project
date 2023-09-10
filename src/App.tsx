import React, { useEffect } from 'react';
import './App.css';
// import RegisterForm from './login_register/register';

// import LoginForm from 'login_register/formLogin';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'login_register/login';
import Register from 'login_register/register';
import BookingForm from 'components/userDashBoard/FormBooking';
// import UserDashBoard from 'components/userDashBoard/userDashBoard';
import ListForm from 'components/userDashBoard/ProfileUser';
import TestDashBoard from 'components/userDashBoard/testDashBoard';
import PrivateRoute from 'PrivateRouter';
import OperatorPage from 'components/operatorDashBoard/operatorDashBoard';
import UserPage from 'components/userDashBoard/testDashBoard';
import PublicRoute from 'PublicRouter';
import Logout from 'Logout';
import CheckUserRouter from 'components/userDashBoard/CheckUserRouter';
import CheckOperatorRouter from 'components/operatorDashBoard/CheckOperatorRouter';

// import TestLayout from 'components/userDashBoard/testDashBoard';
// import TestDashBoard from 'components/userDashBoard/testDashBoard';
// import FromWait from 'components/userDashBoard/FormWait';


function App() {


 

  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='register' element= {<Register  />} />

    </Routes>
    

    
     
      


     
  )
};

export default App;

 // return (

  //   // element={<PublicRoute />}

