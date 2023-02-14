import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Activity from "./Activity";
import ActivityList from "./ActivityList";
import './form.css';
import Send from "./Send";
function GetSchedule() {
  const [activities,setActivities] = useState([]);
  return (
    <>
    <Stack padding="2rem" direction="row" alignItems="center" justifyContent="space-evenly">
      <Activity activities = {activities} setActivities={setActivities}/>
      <ActivityList activities = {activities} setActivities={setActivities}/>
      <Send/>
    </Stack>
    <div >
      <Typography sx={{textAlign:"center"}}><b>If you don't send your data for processing, your data will be lost :/</b></Typography>
    </div>
    </>
  );
}

export default GetSchedule;
