import { format } from "date-fns";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ title, content, date, update, id, deleteNote, handleOpen }) => {
  return (
    <>
      <Card
        className="note"
        sx={{
          minWidth: { xs: "100%", sm: 275 },
          maxWidth: { sm: 300, md: 300, lg: 300, xl: 300 },
          backgroundColor: "#feff9c",
          ":hover": {
            boxShadow: 5,
          },
        }}
      >
        <CardContent
          onClick={() => handleOpen(id)}
          style={{ cursor: "pointer" }}
        >
          <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
            Created: {format(new Date(date), "MMM do p")}
          </Typography>
          {update && (
            <Typography
              sx={{ fontSize: 12, mb: 1 }}
              color="text.secondary"
              gutterBottom
            >
              Updated: {format(new Date(update), "MMM do p")}
            </Typography>
          )}
          <Typography sx={{ mb: 1 }} variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => deleteNote(id)}
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Note;
