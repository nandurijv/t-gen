import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function TagsList() {
  const [list, setList] = useState([]);
  const handleClick = async () => {
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
  };
  return (
    <>
     <Button variant="contained" mb={4} sx={{ width: "fit-content" }} onClick={handleClick}>
        Get List
      </Button>
        <Stack mt={4} alignItems="center" justifyContent="center" height="50vh" overflow="scroll">
        <Stack gap={4} direction="row" alignItems="center" justifyContent="center" flex="1" flexWrap="wrap" sx={{overflow:"scroll",height:"200px"}}>
            {list && list.map((element)=>{
                return (
                    <Stack key={element.name} p={2} gap={2} sx={{border:"2px solid purple",borderRadius:"1.2rem",width:"150px",height:"150px",boxShadow:"2px 2px 0 0 gray",fontFamily:"Poppins"}} >
                        <Typography variant="h6">{element.name}</Typography>
                        <div>{element.start_time}hrs.-{element.end_time}hrs.</div>
                    </Stack>
                )
            })}
        </Stack>
        </Stack>

    </>

  );
}

export default TagsList;
