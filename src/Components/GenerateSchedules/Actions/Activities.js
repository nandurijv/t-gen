import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Activities({ setItemNumber, setPayload }) {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [list, setList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const handleActivity = () => {
    let activity = {};
    activity.activity = name;
    activity.tags = tagList;
    activity.id = id;
    console.log(activity);
    setId((prev) => prev + 1);
    setActivities((prev) => [...prev, activity]);
  };
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/user/getTags?userID=` +
        sessionStorage.getItem("userID"),
      {
        mathod: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data.data);
      });
  }, []);
  return (
    <Stack
      mt={2}
      height="100%"
      width="80%"
      alignItems="left"
      justifyContent="center"
      overflow="scroll"
      gap={4}
    >
      <Stack gap={2}>
        <label htmlFor="name">
          <Typography variant="h4">Activity Name</Typography>
        </label>
        <input type="text" id="name" placeholder="Activity Name" name="name" />
      </Stack>
      <Stack gap={4} direction="row" flexWrap="wrap" flex="1" width="50%">
        <Typography variant="h4">
          Apply Tags or{" "}
          <Button
            onClick={() => {
              navigate("/dashboard/generateTags");
            }}
            variant="outlined"
          >
            Create One Here
          </Button>
        </Typography>
        <Stack direction="row" gap={4} flexWrap="wrap" flex="1">
        {list &&
          list.map((element) => {
            return (
              <Stack alignItems="center" justifyContent="center" direction="row" key={element._id.$oid}>
                <label htmlFor="tag">{element.name}</label>
                <input type="checkbox" id={element.id} value={element.id} />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <Button variant="outlined" onClick={handleActivity}>
        Add Activity
      </Button>
      <Typography variant="h4">Added Activities</Typography>
      <Stack directon="row"  gap={2} flexWrap="wrap" overflow="scroll">
        {activities &&
          activities.map((activity, index) => {
            return <Stack height="200px" alignItems="center" justifyContent="center" sx={{border:"2px solid brown",borderRadius:"2rem"}} key={index}>{activity.name}</Stack>;
          })}
      </Stack>
      <Button
        disableElevation
        variant="contained"
        sx={{width:"fit-content"}}
        onClick={() => {
          setItemNumber((prev) => {
            return (prev + 1) % 4;
          });
          setPayload((prev) => {
            return { ...prev, activities: [1, 2] };
          });
        }}
      >
        Go To Next Step
      </Button>
    </Stack>
  );
}

export default Activities;
