import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Flights.module.scss";
import { NavLink } from "react-router-dom";
import { fetchFlights } from "./flightService";

function Flights() {
  const username = sessionStorage.getItem("username");
  const role = sessionStorage.getItem("role");
  if (username === "admin") {
    sessionStorage.setItem("role", "admin");
  } else if (username === "staff") {
    sessionStorage.setItem("role", "staff");
  } else {
    sessionStorage.clear();
  }

  const dispatch = useDispatch();

  const flight = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  // const getFlightId = (flightId) => {
  //   dispatch(getSingleFlight(flightId));
  // };

  return (
    <>
      <div className={styles.pageHeader}>
        <Typography variant="h5" component="h2" className={styles.pageHeading}>
          Flights List
        </Typography>
      </div>

      {flight.loading && <div>Loading...</div>}
      {!flight.loading && flight.error ? (
        <div> Error: {flight.error} </div>
      ) : null}
      {!flight.loading && flight.flights.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Flight No</TableCell>
                <TableCell>Airline</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Depature Date</TableCell>
                <TableCell>Depature Time</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {flight.flights.map((flight, index) => (
                <TableRow key={index}>
                  <TableCell> {flight.id} </TableCell>
                  <TableCell>{flight.flightNo}</TableCell>
                  <TableCell>{flight.airline}</TableCell>
                  <TableCell>{flight.source}</TableCell>
                  <TableCell>{flight.destination}</TableCell>
                  <TableCell>{flight.depatureTime.substring(0, 10)}</TableCell>
                  <TableCell>{flight.depatureTime.substring(11, 16)}</TableCell>
                  <TableCell>
                    <NavLink to={`/ancillary-services/${flight.id}`}>
                      <Button variant="outlined" size="small" component="span">
                        Manage Ancillary
                      </Button>
                    </NavLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
}

export default Flights;
