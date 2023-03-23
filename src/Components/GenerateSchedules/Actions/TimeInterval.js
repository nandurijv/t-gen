import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import './Input.css'
function TimeInterval({ setItemNumber, setInt, setPayload }) {
  const [start,setStart] = useState(6)
  const [end,setEnd] = useState(22)
  const [dur, setDuration] = useState(1)
  const handleSet = () => {
    setItemNumber((prev) => {
      return (prev + 1) % 4;
    });
    setPayload((prev) => {
      return { ...prev, intereval_start:start, interval_end:end, slot_dur:dur };
    });
  }
  return (
    <>
      <Stack id="interval" direction="row" gap={4} mt={4} mb={4} alignItems="center" w="50%" justifyContent="center">
        <Stack gap={2} alignItems="center" justifyContent="center">
          <label htmlFor="start">Start Time</label>
          <Stack direction="row" justifyContent="center" alignItems="center" gap={2}><input type="text" name="start" id="start" value={start} placeholder="6"vautofocus onChange={(e)=>{setStart(e.target.value)}} /> HRS</Stack>
        </Stack>
        <div>
          TO
        </div>
        <Stack gap={2}  alignItems="center" justifyContent="center">
          <label htmlFor="end">End Time</label>
          <Stack direction="row" justifyContent="center" alignItems="center" gap={2}><input type="text" name="end" id="end" value={end} placeholder="22" autofocus onChange={(e)=>{setEnd(e.target.value)}} /> HRS</Stack>
        </Stack>
      </Stack>
      <Stack gap={2} alignItems="center" justifyContent="center" mb={4}>
        <label htmlFor="dur">Duration of Slots</label>
        <input name="dur" id="dur" value={dur} onChange={(e)=>{setDuration(e.target.value)}}type="text"/>
      </Stack>
      <Button
        
        disableElevation
        variant="contained"
        onClick={handleSet}
      >
        Set
      </Button>
    </>
  );
}

export default TimeInterval;
