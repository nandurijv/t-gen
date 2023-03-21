import React from 'react'

function TimeInterval({setInt, setPayload}) {
  
  return (
    <div onClick={()=>{setPayload((prev)=>{return {...prev, "intereval":[1,2]}})}}>TimeInterval</div>
  )
}

export default TimeInterval