import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./features/login/LoginPage";
import Dashboard from "./components/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/header/Navbar";
import ManagePassengers from "./features/passenger/ManagePassengers";
import AncillaryServices from "./features/ancillaryservice/AncillaryServices";
import CheckInPassengers from "./features/passenger/CheckInPassengers";
import { useNavigate } from "react-router-dom";
import InFlight from "./features/passenger/InFlight";

const theme = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: "#1976d2",
          ".MuiTableCell-head": {
            color: "#fff",
            fontWeight: "bold",
          },
        },
      },
    },
  },
});

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      navigate("/");
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer></ToastContainer>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-passengers" element={<ManagePassengers />} />
        <Route
          path="/ancillary-services/:flightId"
          element={<AncillaryServices />}
        />
        <Route path="/checkin-passengers" element={<CheckInPassengers />} />
        <Route path="/in-flight" element={<InFlight />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
