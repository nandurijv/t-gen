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
  const handleCheck = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      console.log(e.target.value);
      setTagList((prev) => [...prev, e.target.value]);
    } else {

      setTagList((prev) => {
        console.log(prev?prev.filter((tag)=>tag!==e.target.value):prev);
        return prev?prev.filter((tag)=>tag!==e.target.value):prev
      });
    }
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
    <Stack direction="row" alignItems="center" justifyContent="center" gap={2}>
      <Stack
        mt={2}
        width="60%"
        alignItems="left"
        justifyContent="center"
        overflow="scroll"
        gap={4}
      >
        <Stack gap={2}>
          <label htmlFor="name">
            <Typography sx={{ fontWeight: "800" }} variant="h4">
              Activity Name
            </Typography>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Activity Name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Stack>
        <Stack gap={4} flexWrap="wrap" flex="1" width="100%">
          <Typography variant="h4" sx={{ fontWeight: "800" }}>
            Apply Tags or{" "}
            <Button
              onClick={() => {
                navigate("/dashboard/generateTags");
              }}
              variant="outlined"
              size="small"
              color="secondary"
            >
              Create One Here
            </Button>
          </Typography>
          <Stack direction="row" gap={4} flexWrap="wrap" flex="1">
            {list &&
              list.map((element) => {
                return (
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    direction="row"
                    style={{ fontFamily: "Poppins", fontWeight: "400" }}
                    key={element._id.$oid}
                  >
                    <label htmlFor="tag">{element.name}</label>
                    <input
                      type="checkbox"
                      id={element._id.$oid}
                      value={element._id.$oid}
                      onChange={handleCheck}
                    />
                  </Stack>
                );
              })}
          </Stack>
        </Stack>
        <Button variant="outlined" onClick={handleActivity}>
          Add Activity
        </Button>
      </Stack>
      <hr width="2px" style={{ height: "65vh" }} />
      <Stack
        gap={4}
        direction="column"
        overflow="scroll"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        height="50vh"
        width="50%"
      >
        <Typography variant="h4">See Your Activities Here!</Typography>

        <Stack
          gap={4}
          direction="row"
          overflow="scroll"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          flex="1"
          height="50vh"
          width="100%"
        >
          {activities &&
            activities.map((activity, index) => {
              return (
                <Stack
                  height="100px"
                  width="200px"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: "2px solid brown",
                    borderRadius: "2rem",
                    boxShadow: "2px 2px 0 0 purple",
                  }}
                  key={index}
                  p={2}
                >
                  <div>{activity.activity}</div>
                  <div>
                    {activity.tags.map((tagID) => {
                      return (
                        <span key={tagID}>
                          {list
                            .filter((tag) => tag._id.$oid === tagID)
                            .map((element) => {
                              return <div key={element.id}>{element.name}</div>;
                            })}
                        </span>
                      );
                    })}
                  </div>
                </Stack>
              );
            })}
          {!activities.length && "Nothing to Show Here Yet!"}
        </Stack>
        <Button
          disableElevation
          variant="contained"
          sx={{ width: "fit-content" }}
          onClick={() => {
            setItemNumber((prev) => {
              return (prev + 1) % 4;
            });
            setPayload((prev) => {
              return { ...prev, activities: activities };
            });
          }}
        >
          Go To Next Step
        </Button>
      </Stack>
    </Stack>
  );
}

export default Activities;
