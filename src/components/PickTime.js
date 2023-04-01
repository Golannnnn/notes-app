import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const PickTime = ({ value, handleChange }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="Remind me at"
          value={value}
          onChange={handleChange}
          sx={{ mb: 2 }}
          disablePast={true}
          format="HH:mm:ss"
        />
      </LocalizationProvider>
    </>
  );
};

export default PickTime;
