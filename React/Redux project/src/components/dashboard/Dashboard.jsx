import React, { useEffect } from "react";
import { Container } from "@mui/system";
import styles from "./Dashboard.module.scss";
import Flights from "../../features/flights/Flights";
import { apiUrl } from "../../api/utils";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getFlights } from "../../features/flights/flightSlice";

function Dashboard() {
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
    <Container maxWidth="xl">
      <div className={styles.dashboard}>
        <Flights />
      </div>
    </Container>
  );
}

export default Dashboard;
