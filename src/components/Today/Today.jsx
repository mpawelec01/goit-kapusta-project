import React, { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import css from "./Today.module.css";

const Today = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className={css.wrapper}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Wybierz datę"
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Today;
