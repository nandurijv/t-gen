import { Button } from "@mui/material";
import React, { useState } from "react";

function Activities({ setItemNumber, setPayload }) {
  const [activities,setActivities] = useState([])
  
  return (
    <>
      <div
        onClick={() => {
          setPayload((prev) => {
            return { ...prev };
          });
        }}
      >
        Activities
      </div>
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
        Set
      </Button>
    </>
  );
}

export default Activities;
