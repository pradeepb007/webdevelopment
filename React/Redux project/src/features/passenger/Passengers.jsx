import React from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { getAllPassengers } from "./passengerSlice";
import { getFlightID } from "../flights/flightSlice";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Passengers() {
  // const AllPassengers = useSelector(getAllPassengers);
  // const FlightID = useSelector(getFlightID);
  // const flightPassengers = AllPassengers.filter(
  //   (item) => item.flightId === FlightID
  // );

  // console.log(flightPassengers);

  // const selectedFlight = useSelector(getFlightID);
  // console.log(selectedFlight);
  return (
    <>
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Passport</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Seat No</TableCell>
              <TableCell>Ancillary Services</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flightPassengers.map((passenger, index) => (
              <TableRow key={index}>
                <TableCell> {passenger.id} </TableCell>

                <TableCell>{passenger.name}</TableCell>
                <TableCell>{passenger.passport}</TableCell>
                <TableCell>{passenger.dateOfBirth}</TableCell>
                <TableCell>{passenger.address}</TableCell>
                <TableCell>{passenger.seatNo}</TableCell>
                <TableCell>
                  {passenger.ancillaryServices.map((service, index) => (
                    <ul key={index}>
                      <li>{service}</li>
                    </ul>
                  ))}
                </TableCell>
                <TableCell>
                  <Stack spacing={2} direction="row">
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  );
}

export default Passengers;
