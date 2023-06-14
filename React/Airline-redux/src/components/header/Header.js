import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
function Header() {
  const username = sessionStorage.getItem("username");
  const role = sessionStorage.getItem("role");
  if (username === "admin") {
    sessionStorage.setItem("role", "admin");
  } else if (username === "staff") {
    sessionStorage.setItem("role", "staff");
  } else {
    sessionStorage.clear();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/dashboard" className="menu-item">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon />
            </IconButton>
          </NavLink>
        
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Airline Check-In System
          </Typography>
          <div className="username"> 
          {role === "admin" && (
            <Typography variant="h6" component="p">
              Admin
            </Typography>
          )}
          {role === "staff" && (
            <Typography variant="h6" component="p">
              Staff
            </Typography>
          )}
          </div>
          <NavLink to="/" className="menu-item">
            <Button
              color="inherit"
              variant="outlined"
              startIcon={<LogoutIcon />}
            >
              Logout
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
