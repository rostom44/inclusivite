import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { InputLabel, Button, OutlinedInput } from "@mui/material";

const ChatDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 3 }}
    >
      <button
        onClick={handleClickOpen}
        style={{
          padding: "15px",
          background: "#00796B",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          "&:hover": { color: "#00796B", border: "1px solid #00796B" },
        }}
        aria-label="Open Assistance"
      >
        Open Assistance
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            position: "fixed",
            bottom: "10",
            right: "10",
            margin: "0",
            width: "400px",
            height: "18rem",
          },
        }}
      >
        <DialogTitle>
          Aladin
          <IconButton
            aria-label="close"
            aria-label="close"
            onClick={handleClose}
            style={{ position: "absolute", right: 8, top: 8, color: "#555" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography>
            Bonjour, je suis Aladin, votre IA personnalisée.
          </Typography>
          <Typography aria-label="Message" sx={{ pb: "10px" }}>
            Que puis-je faire pour vous ?
          </Typography>
          <InputLabel htmlFor="outlined-email" aria-label="Message">
            Message
          </InputLabel>
          <OutlinedInput
            id="outlined-email"
            type="text"
            aria-label="Message"
            sx={{
              "&.MuiOutlinedInput-root": {
                borderColor: "#00796B",
                width: "100%",
              },
            }}
          />
          <Button
            type="submit"
            aria-label="Send"
            sx={{
              backgroundColor: "#00796B",
              color: "white",
              width: "100%",
              mt: "1rem",
              "&:hover": { color: "#00796B", border: "1px solid #00796B" },
            }}
          >
            Envoyer
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatDialog;
