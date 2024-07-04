import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import entretient from "../assets/entretient.jpeg";

export default function Mission1() {
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
        1. Recrutement et développement des talents
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
            <b>Audit des pratiques actuelles</b> : Analyse des processus de
            recrutement et de développement pour identifier les biais
            potentiels.
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Stratégies inclusives</b> : Mise en place de pratiques de
            recrutement inclusives (annonces de recrutement neutres, panels de
            recrutement diversifiés, etc.).
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
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
