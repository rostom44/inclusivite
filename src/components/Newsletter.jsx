import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";

export default function Newsletter() {
  const isSmallScreen = useMediaQuery("(max-width: 428px)");

  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: "50%",
        mt: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isSmallScreen ? "1rem" : "1.5rem",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ pt: "1rem", width: "100%" }}
        >
          Suivez notre Newsletter
        </Typography>
        <Typography sx={{ pl: "1rem", pr: "1rem" }}>
          Soyez les premiers à découvrir des stratégies innovantes pour
          transformer votre entreprise en un modèle d&apos;inclusion et de
          diversité. Inscrivez-vous dès aujourd&apos;hui et faites partie du
          changement !
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
          <InputLabel htmlFor="outlined-email">Email</InputLabel>{" "}
          <OutlinedInput
            id="outlined-email"
            type="email"
            aria-label="Email"
            sx={{
              "&.MuiOutlinedInput-root": {
                borderColor: "#00796B",
              },
            }}
          />
        </FormControl>

        <Button
          type="submit"
          sx={{
            backgroundColor: "#00796B",
            color: "white",
            mt: isSmallScreen ? "1rem" : "",
            width: "60%",
            "&:hover": { color: "#00796B", border: "1px solid #00796B" },
          }}
        >
          Envoyer
        </Button>
      </Box>
    </Paper>
  );
}
