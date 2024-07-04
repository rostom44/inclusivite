import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import suivi from "../assets/suivi.jpg";

export default function Mission5() {
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
        5. Suivi des Progrès
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "",
          alignItems: isSmallScreen ? "center" : "",
          width: "100%",
          gap: "0.5rem",
        }}
      >
        <Box
          component="ul"
          sx={{
            width: isSmallScreen ? "90%" : "55%",
            ml: isSmallScreen ? "1.5rem" : "2.5rem",
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
            <b>Évaluations périodiques</b> : Évaluations régulières pour mesurer
            les progrès réalisés en matière de diversité et d&apos;inclusion.
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Feedback des employés</b> : Collecte régulière de feedback auprès
            des employés sur les initiatives en cours.
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Plans d&apos;action</b> : Élaboration de plans d&apos;action
            basés sur les résultats des évaluations et du feedback.
          </Typography>
        </Box>
        <Box
          component="img"
          src={suivi}
          alt="suivi du avancement "
          sx={{
            width: isSmallScreen ? "50%" : "45%",
            pt: isSmallScreen ? "0.3rem" : "",
            pl: "1rem",
            pr: "1rem",
            borderRadius: "2rem",
          }}
        />
      </Box>
    </Paper>
  );
}
