import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ListItem from "./ListItem";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import './styleTick.css'
function IndexOfSchedule() {
  const [itemNumber, setItemNumber] = useState(0);
  const [int,setInt] = useState(0);
  const [act,setAct] = useState(0);
  const [gen,setGen] = useState(0);
  const [see,setSee] = useState(0);
  const [payload, setPayload] = useState({
    "userID": sessionStorage.getItem("userID")
  });
  return (
    <Stack direction="row" justifyContent="center" gap={2} alignItems="center" mt={4}>
      <Stack
        id="rules"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        {<Typography variant="h3">Rules {itemNumber}</Typography>}
        <ListItem itemNumber={itemNumber} setItemNumber={setItemNumber} setPayload={setPayload} setInt={setInt} setAct={setAct} setGen={setGen} setSee={setSee}/>
      </Stack>
      <Stack
        id="actions"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Typography variant="h3">Actions</Typography>
        <Stack id="action-list" gap={4} mt={4} justifyContent="center" alignItems="left">
            <Stack direction="row" gap={2} >
              <Typography justifyContent="flex-start" alignItems="center" display="flex" variant="h5"><DoneAllIcon id="tick" color={int?"secondary":"gray"}/><Button onClick={()=>{setItemNumber(prev=>0)}} sx={{marginLeft:4}} variant="contained">Set Your Time Interval</Button></Typography>
            </Stack>
            <Stack direction="row" gap={2} >
              <Typography justifyContent="flex-start" alignItems="center" display="flex" variant="h5"><DoneAllIcon id="tick" color={act?"secondary":"gray"}/><Button onClick={()=>{setItemNumber(prev=>1)}} sx={{marginLeft:4}} variant="contained">Set Your Activity List</Button></Typography>
            </Stack>
            <Stack direction="row" gap={2} >
              <Typography justifyContent="flex-start" alignItems="center" display="flex" variant="h5"><DoneAllIcon id="tick" color={gen?"secondary":"gray"}/><Button onClick={()=>{setItemNumber(prev=>2)}} sx={{marginLeft:4}} variant="contained">Generate Your Schedule!</Button></Typography>
            </Stack>
            <Stack direction="row" gap={2} >
              <Typography justifyContent="flex-start" alignItems="center" display="flex" variant="h5"><Button onClick={()=>{setItemNumber(prev=>3)}} sx={{marginLeft:4}} disabled={!see} variant="contained">Well Done! See Your Generated Schedule Here</Button></Typography>
            </Stack>
            {JSON.stringify(payload)}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default IndexOfSchedule;
