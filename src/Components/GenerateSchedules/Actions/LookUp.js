import React, { useState } from 'react'

function LookUp({result, payload}) {
  return (
    <table border="2" cellspacing="2" cellpadding="10">
      <tr>
      {result.pop[0].map((element,index)=>{
        return <th key={index}>{payload.interval_start+(payload.slot_dur*index)}-{Number(payload.interval_start)+Number(payload.slot_dur*index)+Number(payload.slot_dur)}</th>
      })}
      </tr>
      
      {result.pop.slice(0,5).map((element)=>{
        return <tr>{element.map((activity)=>{
          return <td>{Array.from(payload.activities).map((a)=>{
            if(a.id===activity) return a.activity;
            return <span>-</span>
          })}</td>
        })}</tr>
      })}
    </table>
  )
}

export default LookUp