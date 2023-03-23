import { Button } from '@mui/material'
import React from 'react'

function Generate({setItemNumber}) {
  return (
    <>
      <div>Schedule</div>
      <Button onClick={()=>{setItemNumber((prev) => {
            return (prev + 1) % 4;
          });}}>
        Generate Shcedule
      </Button>
    </>
  )
}

export default Generate