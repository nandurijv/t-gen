import { Button, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { EmailOutlined } from "@mui/icons-material";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = object({
  email: string()
    .email("Please enter a valid email address")
    .required("Must not be empty"),
  password: string().required("Please enter your password"),
});

function Login({setAlert, setAlertType, setAlertMessage}) {
  const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false);
  const onSubmit = (values) => {
    try{
    fetch(`${process.env.REACT_APP_BASE_URL}/user/loginUser`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }).then(res=>res.json()).then(data=>{
      setAlert(true)
      setAlertType(data["success"]?"success":"error")
      setAlertMessage(data["message"])
      if(data["success"]) {
        console.log(data);
        sessionStorage.setItem("token",data["token"]);
        sessionStorage.setItem("user_name",data["name"]);
        sessionStorage.setItem("user_email",data["email"]);
        navigate('dashboard');
      }
    })
  }catch(err){
    setAlert(true)
      setAlertType("error")
      setAlertMessage("Internal Error Occurred. Please try again later.")
  }};
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  });
  const handleClickShowPassword = (event) => {
    setShowPassword((prev) => !prev);
    let current = event.target.style.color;
    event.target.style.color = current==="purple"?"black":"purple";
    console.log(event.target.style.color)
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
      <form  style={{ width: "100%",display: "flex",justifyContent: "center",alignItems: "center"}} action="/" onSubmit={formik.handleSubmit}>
        <Stack spacing={2} width="80%" alignItems="center" justifyContent="center">
        <TextField
          error={formik.touched.email && formik.errors.email}
          helperText={formik.errors.email}
          InputProps={{
            endAdornment:(
              <InputAdornment position="end">
                <IconButton onClick={(event)=>{event.target.style.color="purple"}}>
                  <EmailOutlined/>
                </IconButton>
                </InputAdornment>
                ),
                style:{backgroundColor:"white"}
          }}
          id="name"
          label="Email Address"
          name="name"
          variant="outlined"
          sx={{ width: "80%" }}
          {...formik.getFieldProps("email")}
        />
        <TextField
          error={formik.touched.password && formik.errors.password}
          helperText={formik.errors.password}
          type={showPassword?"text":"password"}
          id="password"
          label="Password"
          name="password"
          variant="outlined"
          sx={{ width: "80%" }}
          {...formik.getFieldProps("password")}
          InputProps={{
            endAdornment:(
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
                </InputAdornment>
                ),
                style:{backgroundColor:"white"}
          }}
        />
        <Button style={{color:formik.isValid?"":"rgb(255,255,255,0.5)"}}disabled={!formik.isValid} type="submit" color="secondary" variant="contained" disableElevation>Login</Button>
        </Stack>
      </form>
  );
}

export default Login;
