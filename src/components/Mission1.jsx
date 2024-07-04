import { Box, Paper, Typography } from "@mui/material";
import entretient from "../assets/entretient.jpeg";

export default function Mission1() {
  return (
    <Paper
      elevation={2}
      sx={{
        height: "23rem",
        width: "100%",
        mt: "2rem",
        backgroundColor: "#B7E4C7",
      }}
    >
      <Typography
        variant="h5"
        sx={{ pt: "1.5rem", pl: "2rem", pb: "1rem", fontWeight: "bold" }}
      >
        1. Recrutement et développement des talents
      </Typography>
      <Box sx={{ display: "flex", width: "100%", gap: "0.5rem" }}>
        <Box
          component="ul"
          sx={{
            width: "55%",
            ml: "2.5rem",
            listStyle: "none",
          }}
        >
          <Typography
            component="li"
            sx={{ pt: "1rem", fontSize: "1rem", textJustify: "auto" }}
          >
            <b>Audit des pratiques actuelles</b> : Analyse des processus de
            recrutement et de développement pour identifier les biais
            potentiels.
          </Typography>
          <Typography
            component="li"
            sx={{ pt: "1rem", fontSize: "1rem", textJustify: "auto" }}
          >
            <b>Stratégies inclusives</b> : Mise en place de pratiques de
            recrutement inclusives (annonces de recrutement neutres, panels de
            recrutement diversifiés, etc.).
          </Typography>
          <Typography
            component="li"
            sx={{ pt: "1rem", fontSize: "1rem", textJustify: "auto" }}
          >
            <b>Formation des recruteurs</b> : Formation des recruteurs pour
            reconnaître et éviter les biais inconscients.
          </Typography>
        </Box>
        <Box
          component="img"
          src={entretient}
          alt="Entretient image"
          sx={{
            width: "45%",
            pl: "1rem",
            pr: "1rem",
            borderRadius: "2rem",
          }}
        />
      </Box>
    </Paper>
  );
}
