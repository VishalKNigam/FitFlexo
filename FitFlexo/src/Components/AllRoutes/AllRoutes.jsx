import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import LayoutLogin from '../../Login/LayoutLoging';
import SignUp from '../../Login/SignUp';
import LogIn from '../../Login/Login';
import Trainers from '../Trainers/Trainers';
import Appointment from '../Appointment/Appointment';

const AllRoutes = () => {

    const {isAuth} = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/register" element={<LayoutLogin/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={!isAuth?<LogIn/>:<Home/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes
