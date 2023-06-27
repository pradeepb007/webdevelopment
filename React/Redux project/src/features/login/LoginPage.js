import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import styles from "./Login.module.scss";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

function LoginPage() {
  const navigate = useNavigate();
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#" className={styles.link}>
          Airline Check-In System
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    sessionStorage.clear();
  },[])

  const proceedLogin = (event) => {
    event.preventDefault();

    if (validateUser()) {
      
      fetch("http://localhost:4000/users?username=" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("please enter valid username");
          } else {
            if (resp[0].password === password) {             
              navigate("/dashboard");
              toast.success("login successful");
              sessionStorage.setItem("username", username);                         
            } else {
              toast.error("Please Enter Valid credentials");
            }
          }
        })
        .catch((error) => {
          toast.error("Login Failed due to: " + error.message);
        });
    }
  };

  const validateUser = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <>
      <div className={styles.signinBgContainer} data-testid="login">
        <Typography component="h1" variant="h5" className={styles.pageHeading}>
          Airline Check-In System
        </Typography>

        <div className={styles.signinContainer}>
          <Paper elevation={1} className={styles.loginForm}>
            <div>
              <Avatar className={styles.loginAvatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h2" variant="h5">
                Sign in
              </Typography>
              <form noValidate onSubmit={proceedLogin}>
                <TextField
                  placeholder="Enter admin / staff"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  name="username"
                  autoComplete="current-username"
                />

                <TextField
                  margin="normal"
                  placeholder="Enter admin / staff"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<LoginIcon />}
                >
                  Sign In
                </Button>

                <div className={styles.loginText}>
                  <span>OR</span>
                </div>

                <center>
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      const details = jwtDecode(credentialResponse.credential);
                      console.log(details);
                      console.log(credentialResponse);
                      navigate("/dashboard");
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </center>

                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
