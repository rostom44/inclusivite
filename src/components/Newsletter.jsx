import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";

export default function Newsletter() {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: "45%",

        mt: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ pt: "1rem", width: "100%" }}
        >
          Suivez notre Newsletter
        </Typography>
        {/* <OutlinedInput
          label="Email"
          type="email"
          sx={{ mt: "0.5rem", height: "3rem", width: "80%" }}
        /> */}
        <FormControl
          sx={{
            mt: "0.5rem",
            height: "3rem",
            width: "80%",
          }}
          variant="outlined"
        >
          <InputLabel>Email</InputLabel>
          <OutlinedInput
            id="outlined-email"
            type="email"
            label="Email"
            sx={{ "&.MuiOutlinedInput-root": { borderColor: "#00796B" } }}
          />
        </FormControl>

        <Button
          type="submit"
          sx={{ backgroundColor: "#00796B", color: "white", width: "60%" }}
        >
          Envoyer
        </Button>
      </Box>
    </Paper>
  );
}
