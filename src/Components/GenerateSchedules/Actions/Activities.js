import { Button, Stack } from "@mui/material";
import React, { useState } from "react";

function Activities({ setItemNumber, setPayload }) {
  const [activities,setActivities] = useState([])
  const handleActivity = ()=>{

  }
  return (
    <Stack gap={4} mt={2} alignItems="left" justifyContent="center">
      <Stack gap={2}>
        <label htmlFor="name">Activity Name</label>
        <input type="text" id="name" placeholder="Activity Name" name="name"/>
      </Stack>
      <input type="checkbox" id="something"/>
      <Button
        disableElevation
        variant="contained"
        onClick={() => {
          setItemNumber((prev) => {
            return (prev + 1) % 4;
          });
          setPayload((prev) => {
            return { ...prev,  activities: [1, 2] };
          });
        }}
      >
        Go To Next Step
      </Button>
    </Stack>
  );
}

export default Activities;
