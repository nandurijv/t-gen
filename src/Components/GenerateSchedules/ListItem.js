import React, { useState } from "react";
import TimeInterval from "./Actions/TimeInterval";
import Activities from "./Actions/Activities";
import Generate from "./Actions/Generate";
import LookUp from "./Actions/LookUp";
import { Stack, Typography } from "@mui/material";

function ListItem({ payload,itemNumber, setItemNumber, setInt, setAct, setGen, setSee, setPayload }) {
  const [result,setResult] = useState();
  return (
    <>
      {itemNumber === 0 && <>{<Typography variant="h1">Set Your Time Interval</Typography>}<TimeInterval setInt={setInt} setPayload={setPayload} setItemNumber={setItemNumber} /></>}
      {itemNumber === 1 && <>{<Typography variant="h1">Set Your Activity List</Typography>}<Activities setAct={setAct} setPayload={setPayload} setItemNumber={setItemNumber}/></>}
      {itemNumber === 2 && <>{<Typography variant="h1" sx={{textAlign:"center"}} mb={2}>Generate Your Time Table!</Typography>}<Generate setResult={setResult} payload={payload} setGen={setGen} setPayload={setPayload} setItemNumber={setItemNumber}/></>}
      {itemNumber === 3 && <>{<Typography variant="h1">Here's Your Time Table</Typography>}<LookUp setSee={setSee} result={result} payload={payload} setItemNumber={setItemNumber}/></>}
    </>
  );
}

export default ListItem;
