import React, { useState } from 'react'

function LookUp() {
  const [table,setTable] = useState(sessionStorage.getItem('schedule'))
  return (
    <div>LookUp</div>
  )
}

export default LookUp