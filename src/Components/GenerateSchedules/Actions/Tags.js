import { Alert, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
function Tags() {
  const [name, setName] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [message,setMessage] = useState("");
  const [loading,setLoading] = useState(false);
  const handleSet = () => {
    setLoading(true)
    console.log(`${process.env.BASE_URL}`);
    fetch(`${process.env.REACT_APP_BASE_URL}/user/createTag`,{
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({userID: sessionStorage.getItem("userID"),name, start_time:start, end_time:end})
    }).then(res=>res.json()).then((data)=>{
        setLoading(false);
        setMessage(data.success);
    }).catch((err)=>{
        setLoading(false);
        setMessage(err.message);
    })
  };
  return (
    <Stack gap={4} alignItems="center" justifyContent="center" minHeight="90vh">
      <Typography variant="h4">Generate Your Own Tags</Typography>
      <Stack gap={4} width="50%">
        <Stack gap={2} className="tag" alignItems="center" justifyContent="center">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tag Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </Stack>
        <Stack direction="row" justifyContent="space-around">
          <Stack gap={2} className="tag" alignItems="center" justifyContent="center">
            <label htmlFor="start_time">Start Time</label>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <input
                type="number"
                required
                id="start"
                name="start"
                min="0"
                max="23"
                placeholder="0"
                onChange={(e) => {
                  setStart(e.target.value);
                }}
                value={start}
              />
              <div>HRS</div>
            </Stack>
          </Stack>
          <Stack alignItems="center" justifyContent="center" width="10%"><b>TO</b></Stack>
          <Stack gap={2} className="tag" alignItems="center" justifyContent="center" >
            <label htmlFor="end_time">End Time</label>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <input
                type="number"
                id="end"
                name="end"
                max="23"
                min="0"
                required
                placeholder="23"
                onChange={(e) => {
                  setEnd(e.target.value);
                }}
                value={end}
              />
              <div>HRS</div>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          onClick={handleSet}
          disabled={loading}
        >
          Create Tag
        </Button>
      </Stack>
      {message && <Alert onClose={()=>{setMessage("")}} severity="info">{message?"Created Successfully":"Try Again"}
        </Alert>}
    </Stack>
  );
}

export default Tags;
