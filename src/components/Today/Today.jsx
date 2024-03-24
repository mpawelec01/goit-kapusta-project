import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import css from "./Today.module.css";

const Today = ({ selectedDate, onDateChange }) => {
  return (
    <div className={css.wrapper}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Chose date"
          value={selectedDate}
          onChange={(newValue) => {
            onDateChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Today;
