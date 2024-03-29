import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ListItem from "./ListItem";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./styleTick.css";
function IndexOfSchedule() {
  const [itemNumber, setItemNumber] = useState(0);
  const [int, setInt] = useState(0);
  const [act, setAct] = useState(0);
  const [gen, setGen] = useState(0);
  const [see, setSee] = useState(0);
  const [payload, setPayload] = useState({
    userID: sessionStorage.getItem("userID"),
  });
  return (
    <Stack
      direction="row"
      justifyContent="center"
      gap={2}
      alignItems="center"
      mt={4}
    >
      <Stack
        id="rules"
        justifyContent="center"
        alignItems="center"
        width="70%"
        sx={{ position: "absolute", left: "26vw", top: "10%", height: "90vh" }}
      >
        <ListItem
          itemNumber={itemNumber}
          setItemNumber={setItemNumber}
          setPayload={setPayload}
          setInt={setInt}
          setAct={setAct}
          setGen={setGen}
          setSee={setSee}
          payload={payload}
        />
      </Stack>
      <Stack
        id="actions"
        justifyContent="center"
        alignItems="center"
        width="fit-content"
        p={2}
        sx={{
          position: "absolute",
          left: 0,
          top: "0%",
          height: "100vh",
          color: "white",
          backgroundColor: "purple",
          zIndex: 0,
        }}
      >
        <Typography variant="h3">Actions</Typography>
        <Stack
          id="action-list"
          gap={4}
          mt={4}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            
          >
            <Typography
              sx={{justifyContent:"center",alignItems:"center"}}
              display="flex"
              variant="h5"
            >
              <Button
                endIcon={
                  <DoneAllIcon id="tick" color={int ? "secondary" : "gray"} />
                }
                onClick={() => {
                  setItemNumber((prev) => 0);
                }}
                sx={{ width: "300px" }}
                variant="contained"
              >
                Set Your Time Interval
              </Button>
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            direction="row"
            gap={2}
          >
            <Typography
              justifyContent="center"
              alignItems="center"
              display="flex"
              variant="h5"
            >
              <Button
                endIcon={
                  <DoneAllIcon id="tick" color={act ? "secondary" : "gray"} />
                }
                onClick={() => {
                  setItemNumber((prev) => 1);
                }}
                sx={{width: "300px" }}
                variant="contained"
              >
                Set Your Activity List
              </Button>
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            direction="row"
            gap={2}
          >
            <Typography
              justifyContent="center"
              alignItems="center"
              display="flex"
              variant="h5"
            >
              <Button
                endIcon={
                  <DoneAllIcon id="tick" color={gen ? "secondary" : "gray"} />
                }
                onClick={() => {
                  setItemNumber((prev) => 2);
                }}
                sx={{width: "300px" }}
                variant="contained"
              >
                Generate Your Schedule!
              </Button>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default IndexOfSchedule;
