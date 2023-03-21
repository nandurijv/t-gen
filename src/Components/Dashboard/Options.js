import { Button, Stack } from '@mui/material'
import React from 'react'
import Svg2 from '../SVGs/Svg2'
import Svg3 from '../SVGs/Svg3'
import Svg1 from '../SVGs/Svg1'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion';
function Options() {
    const navigate = useNavigate()
  return (
    <Stack sx={{width:"100%"}} direction="row">
      
      <Stack sx={{width:"100%",minHeight:"70vh",padding:"2rem"}} alignItems="center" justifyContent="center" spacing={4}>
        <motion.div>
        <Svg1/>
        </motion.div>
        <Button variant="contained" color="secondary" onClick={()=>{navigate('generateSchedule')}}disableRipple disableElevation>Generate Schedule</Button>
      </Stack>      
    </Stack>
  )
}

export default Options