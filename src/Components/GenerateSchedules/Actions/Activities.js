import React from 'react'

function Activities({setPayload}) {
  return (
    <div onClick={()=>{setPayload((prev)=>{return {...prev, "activities":[1,2]}})}}>Activities</div>
  )
}

export default Activities