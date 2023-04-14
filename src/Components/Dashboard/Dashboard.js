import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'

function Dashboard() {
  const navigate = useNavigate()
  useEffect(() => {
    if(!sessionStorage.getItem("token")){
      navigate('/');
    }
  },[navigate])
  
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default Dashboard