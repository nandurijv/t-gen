import { TextField, InputAdornment, Button } from "@mui/material";
import { Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CircularProgress from "@mui/material/CircularProgress";
import Verify from "./Verify.js";
import { useState } from "react";
import { useFormik } from 'formik';
import { motion } from "framer-motion";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      confirm_password:""
    },
    onSubmit: (values)=>{

    },
    validate:({name,email,password,confirm_password})=>{
      let errors ={}
      if(!name){
        errors.name = `Required*`;
      }else if(!/^\D*$/.test(name)|| !/^[^!@#$%&*]*$/.test(name)){
        errors.name = 'Name should not contain numbers or special characters'
      }
      if(!email){
        errors.email = "Required*";
      }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        errors.email = "Please Enter a valid email address"
      }
      if(!password){
        errors.password = "Required*";
      }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
        errors.password = "Password must have minimum eight characters, at least one letter, one number and one special character";
      }
      if(!confirm_password){
        errors.confirm_password = "Required*";
      }else if(confirm_password!== password){
        errors.confirm_password = "Passwords must match*"
      }
      return errors;
    }
  });
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleClickShowPassword2 = () => {
    setShowPassword2((prev) => !prev);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <form style={{ width: "100%" }} action="/" onSubmit={formik.handleSubmit}>
      <Stack
        sx={{ width: "100%" }}
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <AccountCircleIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={formik.touched.name&&formik.errors.name}
          helperText={formik.errors.name}
          id="name"
          label="Full Name"
          name="name"
          variant="outlined"
          sx={{ width: "60%" }}
          {... formik.getFieldProps('name')}
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <EmailIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={formik.touched.email&&formik.errors.email}
          helperText={formik.errors.email}
          id="email"
          label="Email"
          name="email"
          variant="outlined"
          sx={{ width: "60%" }}
          {... formik.getFieldProps('email')}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={formik.touched.password&&formik.errors.password}
          helperText={formik.errors.password}
          id="password"
          label="Password"
          name="password"
          variant="outlined"
          sx={{ width: "60%" }}
          {... formik.getFieldProps('password')}
        />
        <TextField
          type={showPassword2 ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={formik.touched.confirm_password&&formik.errors.confirm_password}
          helperText={formik.errors.confirm_password}
          id="confirm_password"
          label="Confirm Password"
          name="confirm_password"
          variant="outlined"
          sx={{ width: "60%" }}
          {... formik.getFieldProps('confirm_password')}
        />
        <motion.div whileHover={{scale:1.2}}>
        <Button
        disabled = {!formik.isValid?true:false}
        type="submit"
          variant="contained"
          disableElevation
          color="secondary"
          onClick={handleOpen}
          sx={{paddingLeft:"0.8rem",paddingRight:"0.8rem"}}
        >
          {loading ? (
            <CircularProgress size={25} sx={{ color: "white" }} />
          ) : (
            "Submit"
          )}
        </Button>
        </motion.div>
        {open && <Verify open={open} handleClose={handleClose} />}
      </Stack>
    </form>
  );
}

export default Register;
