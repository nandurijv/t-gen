import React, { useEffect } from 'react'

function ActivityList({activities}) {
  useEffect(()=>{

  },[activities])
  return (
    <div>
      {activities.map((element,index)=>{
        return (<div key={element.name}>
          {element.name}
          {element.tag}
          </div>)
      })}
    </div>
  )
}

export default ActivityList