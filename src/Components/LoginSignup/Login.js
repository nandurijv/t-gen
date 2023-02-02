import { Button, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
const onSubmit = (values) => {
  console.log(values);
};
function Login({alert, alertType, alertMessage, setAlert, setAlertType, setAlertMessage}) {
  const [showPassword,setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  });
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
      <form  style={{ width: "100%" }} action="/" onSubmit={formik.handleSubmit}>
        <Stack spacing={2} width="100%" alignItems="center" justifyContent="center">
        <TextField
          error={formik.touched.email && formik.errors.email}
          helperText={formik.errors.email}
          id="name"
          label="Email Address"
          name="name"
          variant="outlined"
          sx={{ width: "60%" }}
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
          sx={{ width: "60%" }}
          {...formik.getFieldProps("password")}
          InputProps={{
            endAdornment:(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
                </InputAdornment>
                )
          }}
        />
        <Button disabled={!formik.isValid} type="submit" variant="contained" disableElevation>Login</Button>
        </Stack>
      </form>
  );
}

export default Login;
