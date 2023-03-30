import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Header = ({ handleOpen }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontSize: "1.5rem",
              fontWeight: 600,
            }}
            // style={{ color: "black", fontSize: "1.5rem", fontWeight: 600 }}
          >
            Notes app
          </Typography>
          <Button
            type="submit"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpen(null)}
          >
            Add note
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
