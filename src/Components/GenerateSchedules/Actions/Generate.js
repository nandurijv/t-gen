import { Button } from "@mui/material";
import React, { useState } from "react";

function Generate({ setResult,setItemNumber, payload }) {
  const [loading,setLoading] = useState(false);
  const handleGen = async () => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_BASE_URL}/user/postSchedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    }).then(res=>res.json()).then(data=>{
      console.log(data);
      setLoading(false);
      setResult(data.data)
      setItemNumber((prev) => {
        return (prev + 1) % 4;
      });
    }).catch(err => console.log(err))
  };
  return (
    <>
    {loading && "Loading.... Please Wait"}
      {!loading && <Button
        variant="contained"
        onClick={handleGen}
      >
        Generate Schedule
      </Button>}
    </>
  );
}

export default Generate;
