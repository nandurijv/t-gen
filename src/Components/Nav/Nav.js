import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const matches = useMediaQuery("(min-width:800px)");
  const navigate = useNavigate();
  return (
    <div className="nav">
      <Stack
        spacing={2}
        direction={!matches ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* logo and title */}
        <motion.div
          animate={{ scale: [null, 1.2] }}
          transition={{ duration: 0.3, type: "easeOut" }}
          drag="x"
          dragConstraints={{ left: -5, right: 5 }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* title */}
            <div id="title">
              <motion.div
                whileHover={{
                  scale: [null, 1.3],
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{marginLeft:"1rem"}}
                >
                  <Typography variant="h5">Shedge</Typography>
                </Stack>
              </motion.div>
            </div>
          </Stack>
        </motion.div>

        {/* buttons */}
        <Stack direction={!matches ? "column" : "row"} spacing={2}>
          {sessionStorage.getItem("token") &&
          <ButtonGroup>
            <Button
            color="warning"
            variant="contained"
            onClick={() => {
              sessionStorage.clear();
              navigate('/')
            }}
            size="small"
            disableElevation
            disableRipple
          >
            Logout
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              navigate('/dashboard')
            }}
            size="small"
            disableElevation
          >
            Go To Dashboard
          </Button>
          </ButtonGroup>
          }
          {!sessionStorage.getItem("token")&&<>
          <motion.div
            whileHover={{
              scale: [null, 1.05],
            }}
            whileTap={{
              scale: 1,
            }}
          >
            <Button
              size="small"
              variant="contained"
              startIcon={<AutoStoriesIcon />}
              color="warning"
              disableElevation
              disableRipple
            >
              Read the Docs
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: [null, 1.05],
            }}
            whileTap={{
              scale: 1,
            }}
          >
            <Button
              size="small"
              variant="contained"
              startIcon={<GitHubIcon />}
              color="secondary"
              disableElevation
              disableRipple
            >
              View on Github
            </Button>
          </motion.div></>}
        </Stack>
      </Stack>
    </div>
  );
}

export default Nav;
