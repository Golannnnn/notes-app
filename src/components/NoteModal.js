import { format } from "date-fns";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const NoteModal = ({ openModal, handleClose, notes }) => {
  const filteredNotes = notes.filter((n) => n.id === openModal.id);
  const [noteObj] = filteredNotes;
  const formattedDate = format(new Date(noteObj.date), "MMM do p");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 300,
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: 1,
    boxShadow: 24,
  };

  return (
    <Modal
      open={openModal.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <CardContent>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {formattedDate}
          </Typography>
          <Typography sx={{ mb: 1 }} variant="h5" component="div">
            {noteObj.title}
          </Typography>
          <Typography variant="body2">{noteObj.content}</Typography>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default NoteModal;
