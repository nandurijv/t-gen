import { Button, Stack } from '@mui/material'
import React from 'react'

function Dashboard() {
  return (
    <Stack sx={{width:"100%"}} direction="row">
      <Stack sx={{width:"100%",minHeight:"90vh"}} alignItems="center" justifyContent="center">
        <Button variant="contained" color="secondary" disableRipple disableElevation>Generate Schedule</Button>
      </Stack>
      <Stack sx={{width:"100%",minHeight:"90vh"}} alignItems="center" justifyContent="center">
        <Button variant="contained" color="secondary" disableRipple disableElevation>Activity Schedule</Button>
      </Stack>
      <Stack sx={{width:"100%",minHeight:"90vh"}} alignItems="center" justifyContent="center">
        <Button variant="contained" color="secondary" disableRipple disableElevation>Generate Schedule</Button>
      </Stack>
    </Stack>
  )
}

export default Dashboard