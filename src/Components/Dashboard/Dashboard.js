import { Button, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import Svg1 from '../SVGs/Svg1'
import Svg2 from '../SVGs/Svg2'
import Svg3 from '../SVGs/Svg3'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  useEffect(() => {
    if(!sessionStorage.getItem("token")){
      navigate('/');
    }
  })
  
  return (
    <Stack sx={{width:"100%"}} direction="row">
      <Stack sx={{width:"100%",minHeight:"80vh",padding:"2rem"}} alignItems="center" justifyContent="center" spacing={4}>
        <Svg1/>
        <Button variant="contained" color="secondary" onClick={()=>{navigate('generateSchedule')}}disableRipple disableElevation>Generate Schedule</Button>
      </Stack>
      <Stack sx={{width:"100%",minHeight:"80vh"}} alignItems="center" justifyContent="center" spacing={4}>
        <Svg2/>
        <Button variant="contained" color="secondary" disableRipple disableElevation>View Schedules</Button>
      </Stack>
      <Stack sx={{width:"100%",minHeight:"80vh"}} alignItems="center" justifyContent="center" spacing={4}>
        <Svg3/>
        <Button variant="contained" color="secondary" disableRipple disableElevation>Reminders</Button>
      </Stack>
    </Stack>
  )
}

export default Dashboard