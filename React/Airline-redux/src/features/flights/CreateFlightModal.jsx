import React from "react";
import DialogContent from "@mui/material/DialogContent";
import { BootstrapDialog, BootstrapDialogTitle } from "../../api/commonMethods";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";



import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import styles from "./Flights.module.scss";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const CreateFlightModal = ({ isOpen, handleClose }) => {



  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
 
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="Add-Flight"
        open={isOpen}
      >
        <BootstrapDialogTitle id="Add-Flight" onClose={handleClose}>
          Add Flight Details
        </BootstrapDialogTitle>
        <DialogContent dividers className={styles.dialogContent}>
          <Box component="form" noValidate autoComplete="off">
            <div>
              <TextField
                fullWidth
                required
                id="FlightNo"
                size="small"
                label="FlightNo"
                className={styles.textBox}
              />

              <TextField
                fullWidth
                required
                id="Airline"
                size="small"
                label="Airline"
                className={styles.textBox}
              />
              <TextField
                fullWidth
                required
                id="Source"
                size="small"
                label="Source"
                className={styles.textBox}
              />
              <TextField
                fullWidth
                required
                id="Destination"
                size="small"
                label="Destination"
                className={styles.textBox}
              />
            
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                  <DateTimePicker label="Departure Date Time" />

                  <DateTimePicker label="Arrival Date Time" />
                </DemoContainer>
              </LocalizationProvider>

              <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          
            </div>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default CreateFlightModal;
