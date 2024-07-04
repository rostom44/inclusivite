import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import analyse from "../assets/analyse.jpg";

export default function Mission4() {
  const isSmallScreen = useMediaQuery("(max-width:428px)");

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
        sx={{
          pt: "1.5rem",
          pl: isSmallScreen ? "1rem" : "2rem",
          pb: "1rem",
          fontWeight: "bold",
          fontSize: isSmallScreen ? "1rem" : "1.5rem",
        }}
      >
        4. Analyse des Effectifs
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column-reverse" : "",
          alignItems: isSmallScreen ? "center" : "",
          width: "100%",
          gap: "0.5rem",
        }}
      >
        <Box
          component="img"
          src={analyse}
          alt="Entretient image"
          sx={{
            width: isSmallScreen ? "50%" : "45%",
            pt: isSmallScreen ? "0.3rem" : "",
            pl: "1rem",
            pr: "1rem",
            borderRadius: "2rem",
          }}
        />
        <Box
          component="ul"
          sx={{
            width: isSmallScreen ? "90%" : "55%",
            ml: "2.5rem",
            listStyle: "none",
          }}
        >
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Collecte de données</b> : Collecte et analyse de données sur la
            diversité des effectifs (âge, genre, origine ethnique, handicap,
            etc.).
          </Typography>
          <Typography
            component="li"
            sx={{ pt: "1.25rem", fontSize: isSmallScreen ? "0.7rem" : "1rem" }}
          >
            <b>Rapports réguliers</b> : Publication de rapports réguliers sur
            l&apos;état de la diversité au sein de l&aposorganisation.
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Tableaux de bord</b> : Tableaux de bord interactifs pour suivre
            les indicateurs clés de diversité.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
