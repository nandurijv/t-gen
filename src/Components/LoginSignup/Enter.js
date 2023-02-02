import { Alert, Button, Link, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import "./Enter.css";
import Banner from "../SVGs/banner";
import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import Login from "./Login";
import Register from "./Register";
import { Cancel } from "@mui/icons-material";
function Enter() {
  const [svgType, setSvgType] = useState(1);
  const [alert,setAlert] = useState(0)
  const [alertType,setAlertType] = useState("");
  const [alertMessage,setAlertMessage] = useState("");
  const [formType, setFormType] = useState(0);
  const matches = useMediaQuery("(min-width:800px)");
  
  return (
    <div className="entry">
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{height:"100%",padding:"2rem"}}>
        {matches && (
          <Stack
            sx={{ width: "100%", height: "70vh" }}
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <AnimatePresence>
            <motion.div
              animate={{ scale: [null, 1.2, 1] }}
              transition={{
                type: "easeOut",
                stiffness: 400,
                damping: 10,
                duration: 0.8,
              }}
              style={{
                marginTop: "1rem",
                marginBottom:"1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "60%",
                width:"100%"
              }}
              exit={{ opacity: 0 }}
            >
              <Banner type={svgType} />
            </motion.div>
            </AnimatePresence>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontFamily: "Ubuntu",marginTop:"2rem" }}
            >
              One Stop Platform to generate your <br />
              Time Tables
            </Typography>
          </Stack>
        )}

        <Stack
          sx={{ width: "100%" }}
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          <Stack alignItems="center" justifyContent="center" sx={{ width: "100%" }} spacing={4}>
            <Typography variant="h3" sx={{ fontFamily: "Ubuntu" }}>
            {formType === 0 ? "Login" : "Register"}
            </Typography>
            {formType === 0 ? <Login alert={alert} setAlert={setAlert} alertType={alertType} setAlertType={setAlertType} alertMessage={alertMessage} setAlertMessage={setAlertMessage}/> : <Register alert={alert} setAlert={setAlert} alertType={alertType} setAlertType={setAlertType} alertMessage={alertMessage} setAlertMessage={setAlertMessage}/>}
          </Stack>
          {alert?<Alert severity={alertType} onClose={()=>{setAlert(false)}}>

            {alertMessage}
            {alertType==="success"?<Button color="success" size="small" variant="contained">Resend Mail?</Button>:""}
            </Alert>:""}
          <Link
            href="#"
            onClick={() => {
              setSvgType((prev) => (prev === 1 ? 2 : 1));
              setFormType((prev) => (prev === 0 ? 1 : 0));
            }}
            variant="text"
          >
            {formType === 0 ? "New to Shedge?" : "Already have an account?"}
          </Link>
        </Stack>
      </Stack>
    </div>
  );
}

export default Enter;
