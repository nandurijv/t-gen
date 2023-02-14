import { Alert, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Enter.css";
import Banner from "../SVGs/banner";
import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import Login from "./Login";
import Nav from '../Nav/Nav';
import Register from "./Register";
import { useNavigate } from "react-router-dom";

function Enter() {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);
  const [svgType, setSvgType] = useState(1);
  const [alert, setAlert] = useState(0);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [formType, setFormType] = useState(0);
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <>
    <Nav/>
      <div className="entry">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ height: "100%",width:"100%", padding: "2rem" }}
        >
          {matches && (
            <Stack
              sx={{ width: "100%"}}
              alignItems="center"
              justifyContent="center"
              spacing={4}
            >
              <AnimatePresence>
                {svgType && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ scale: [null, 1.05, 1], opacity: [0, 0, 1] }}
                    transition={{
                      type: "easeOut",
                      stiffness: 400,
                      damping: 10,
                      duration: 0.3,
                    }}
                    style={{
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      height: "100%",
                      width: "100%",
                    }}
                    exit={{ opacity: 0 }}
                  >
                    <Banner type={svgType} />
                  </motion.div>
                )}
              </AnimatePresence>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontFamily: "Ubuntu",
                  marginTop: "2rem",
                }}
              >
                One Stop Platform to generate your <br />
                Time Tables
              </Typography>
            </Stack>
          )}

          <Stack
            sx={{ width: "100%", height: "100%" }}
            alignItems="center"
            justifyContent="space-around"
            spacing={4}
          >
            <Typography variant="h3" sx={{ fontFamily: "Ubuntu" }}>
              {formType === 0 ? "Login" : "Register"}
            </Typography>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ width: "100%", height: "100%"}}
              spacing={4}
            >
              {formType === 0 && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  style={{ width: "100%"}}
                >
                  <Login
                    alert={alert}
                    setAlert={setAlert}
                    alertType={alertType}
                    setAlertType={setAlertType}
                    alertMessage={alertMessage}
                    setAlertMessage={setAlertMessage}
                  />
                </motion.div>
              )}
              {formType === 1 && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  style={{ width: "100%" }}
                >
                  <Register
                    alert={alert}
                    setAlert={setAlert}
                    alertType={alertType}
                    setAlertType={setAlertType}
                    alertMessage={alertMessage}
                    setAlertMessage={setAlertMessage}
                  />
                </motion.div>
              )}
            </Stack>

            <Button
              onClick={() => {
                setSvgType((prev) => (prev === 1 ? 2 : 1));
                setFormType((prev) => (prev === 0 ? 1 : 0));
              }}
              variant="filled"
              disableRipple
              sx={{color:"white",borderColor:"black",'&:hover':{borderColor:"#ddd",textDecoration:"underline"}}}
            >
              {formType === 0 ? "New to Schedge?" : "Already have an account?"}
            </Button>
            {alert ? (
              <Alert
                severity={alertType}
                onClose={() => {
                  setAlert(false);
                }}
              >
                {alertMessage}
              </Alert>
            ) : (
              <div style={{ height: "6.2vh", width: "300px" }}></div>
            )}
          </Stack>
        </Stack>
      </div>
      
    </>
  );
}

export default Enter;
