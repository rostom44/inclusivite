import { Box, Paper, Typography } from "@mui/material";
import amélioration from "../assets/amélioration.jpg";

export default function Phase3() {
  return (
    <Paper
      elevation={2}
      sx={{
        height: "20rem",
        width: "40rem",
        mt: "2rem",
        backgroundColor: "#D3EBFF",
      }}
    >
      <Typography
        variant="h5"
        sx={{ pt: "1.5rem", pl: "2rem", pb: "1rem", fontWeight: "bold" }}
      >
        Phase 3 : Évaluation et Amélioration Continue
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
            <b>Suivi des métriques</b> : Suivre les métriques clés
            (inscriptions, taux d&apos;ouverture de la newsletter, participation
            aux formations, etc.).
          </Typography>
          <Typography
            component="li"
            sx={{ pt: "1rem", fontSize: "1rem", textJustify: "auto" }}
          >
            <b>Feedback et ajustements</b>:Recueillir des feedbacks des
            utilisateurs et ajuster les services en conséquence.
          </Typography>
        </Box>
        <Box
          component="img"
          src={amélioration}
          alt="amélioration continue"
          sx={{
            width: "40%",
            pl: "1rem",
            pr: "1rem",
            borderRadius: "2rem",
          }}
        />
      </Box>
    </Paper>
  );
}
