import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Empty from "../images/Empty.svg";

const Welcome = ({ handleOpen }) => {
  return (
    <>
      <Grid item sx={{ textAlign: "center", width: "100%", mt: 5 }}>
        <img
          src={Empty}
          alt="add notes"
          style={{ width: "90%", maxWidth: 350, marginRight: 5 }}
        />
      </Grid>
      <Grid item sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ m: 5, marginBottom: 3, color: "#565656" }}
        >
          Start by{" "}
          <Button
            variant="outlined"
            onClick={() => handleOpen(null)}
            style={{
              borderColor: "#003e52",
              color: "#003e52",
            }}
          >
            Creating
          </Button>{" "}
          some notes.
        </Typography>
      </Grid>
    </>
  );
};

export default Welcome;
