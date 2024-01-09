import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';

const AllRoutes = () => {

    const {isAuth} = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes
