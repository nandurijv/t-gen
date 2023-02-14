import { Stack } from '@mui/material'
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
    <Stack direction="row"sx={{width:"100%",textAlign:"center", height:"10vh", alignItems:"center",justifyContent:"space-around"}}>
      <p>Here comes some fine details of the user</p>
      <p>Here comes some fine details of the user</p>
    </Stack>
    <Outlet/>
    </>
  )
}

export default Dashboard