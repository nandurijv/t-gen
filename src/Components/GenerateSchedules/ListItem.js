import React from "react";
import TimeInterval from "./Actions/TimeInterval";
import Activities from "./Actions/Activities";
import Generate from "./Actions/Generate";
import LookUp from "./Actions/LookUp";
import { Typography } from "@mui/material";

function ListItem({ itemNumber, setItemNumber, setInt, setAct, setGen, setSee, setPayload }) {
  return (
    <>
      {itemNumber === 0 && <>{<Typography variant="h3">Set Your Time Interval</Typography>}<TimeInterval setInt={setInt} setPayload={setPayload} setItemNumber={setItemNumber} /></>}
      {itemNumber === 1 && <>{<Typography variant="h3">Set Your Activity List</Typography>}<Activities setAct={setAct} setPayload={setPayload} setItemNumber={setItemNumber}/></>}
      {itemNumber === 2 && <>{<Typography variant="h3">Generate Your Time Table!</Typography>}<Generate setGen={setGen} setPayload={setPayload} setItemNumber={setItemNumber}/></>}
      {itemNumber === 3 && <>{<Typography variant="h3">Here's Your Time Table</Typography>}<LookUp setSee={setSee} setPayload={setPayload} setItemNumber={setItemNumber}/></>}
    </>
  );
}

export default ListItem;
