import { Box, Paper, Typography } from "@mui/material";
import entretient from "../assets/entretient.jpeg";

export default function Mission4() {
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
        4. Analyse des Effectifs
      </Typography>
      <Box sx={{ display: "flex", width: "100%", gap: "0.5rem", pt: "1rem" }}>
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
        <Box
          component="ul"
          sx={{
            width: "55%",
            mr: "2.5rem",
            listStyle: "none",
          }}
        >
          <Typography
            component="li"
            sx={{ fontSize: "1rem", textJustify: "auto" }}
          >
            <b>Collecte de données</b> : Collecte et analyse de données sur la
            diversité des effectifs (âge, genre, origine ethnique, handicap,
            etc.).
          </Typography>
          <Typography
            component="li"
            sx={{ pt: "1.25rem", fontSize: "1rem", textJustify: "auto" }}
          >
            <b>Rapports réguliers</b> : Publication de rapports réguliers sur
            l&apos;état de la diversité au sein de l&aposorganisation.
          </Typography>
          <Typography
            component="li"
            sx={{ pt: "1.25rem", fontSize: "1rem", textJustify: "auto" }}
          >
            <b>Tableaux de bord</b> : Tableaux de bord interactifs pour suivre
            les indicateurs clés de diversité.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
