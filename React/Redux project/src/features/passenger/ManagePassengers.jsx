import React, { useEffect } from "react";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { apiUrl } from "../../api/utils";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Passengers.module.scss";
import Passengers from "./Passengers";
import { getPassengers } from "./passengerSlice";
// import { getAllFlights, getFlightID } from "../flights/flightSlice";

function ManagePassengerPage() {
  const dispatch = useDispatch();

  // const AllFlights = useSelector(getAllFlights);
  // const FlightID = useSelector(getFlightID);
  // const flightDetails = AllFlights.filter((item) => item.id === FlightID);

  // useEffect(() => {
  //   const fetchPassengers = async () => {
  //     const response = await axios
  //       .get(`${apiUrl}/passengers`)
  //       .catch((error) => {
  //         console.log("error", error);
  //       });
  //     console.log("The response from API", response);
  //     dispatch(getPassengers(response.data));
  //   };
  //   fetchPassengers();
  // }, [dispatch]);

  return (
    <>
      {/* <Container maxWidth="xl">
        <div className={styles.pageHeader}>
          <Typography
            variant="h5"
            component="h2"
            className={styles.pageHeading}
          >
            Manage Passengers
          </Typography>
          <button> Create Passenger</button>
        </div>
        <div className={styles.flightDetails}>
          <Typography variant="h5" component="h3">
            Flight Information
          </Typography>
          <div>
            {flightDetails.map((item) => {
              return (
                <>
                  Airline: {item.airline} <br />
                  Flight No: {item.flightNo} <br />
                  Source: {item.source} <br />
                  Destination: {item.destination} <br />
                  DEP Date: {item.flightNo} <br />
                  AVR Date: {item.flightNo} <br />
                  AVR Time : {item.flightNo}
                  <br />
                </>
              );
            })}
          </div>
        </div>
        <Passengers />
      </Container> */}
    </>
  );
}

export default ManagePassengerPage;
