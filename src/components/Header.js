import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Header = ({ handleOpen }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fcf7f1;",
          boxShadow: "none",
          borderBottom: "0.5px solid darkgrey",
          padding: 1,
        }}
      >
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#cf2e2e",
              fontSize: "1.5rem",
              fontWeight: 600,
            }}
            // style={{ color: "black", fontSize: "1.5rem", fontWeight: 600 }}
          >
            notes app
          </Typography>
          <Button
            variant="outlined"
            type="submit"
            startIcon={<AddIcon />}
            onClick={() => handleOpen(null)}
            style={{
              fontWeight: 500,
              backgroundColor: "#003e52",
              borderColor: "#003e52",
              color: "white",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            Add note
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
