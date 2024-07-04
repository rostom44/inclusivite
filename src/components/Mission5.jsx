import { Box, Paper, Typography } from "@mui/material";
import suivi from "../assets/suivi.jpg";

export default function Mission5() {
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
        5. Suivi des Progrès
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
            <b>Évaluations périodiques</b> : Évaluations régulières pour mesurer
            les progrès réalisés en matière de diversité et d&apos;inclusion.
          </Typography>
          <Typography
            component="li"
            sx={{ pt: "1rem", fontSize: "1rem", textJustify: "auto" }}
          >
            <b>Feedback des employés</b> : Collecte régulière de feedback auprès
            des employés sur les initiatives en cours.
          </Typography>
          <Typography
            component="li"
            sx={{ pt: "1rem", fontSize: "1rem", textJustify: "auto" }}
          >
            <b>Plans d&apos;action</b> : Élaboration de plans d&apos;action
            basés sur les résultats des évaluations et du feedback.
          </Typography>
        </Box>
        <Box
          component="img"
          src={suivi}
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
