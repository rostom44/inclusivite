import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import women from "../assets/femme-circle.jpg";

export default function Mission2() {
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
        2. Renforcement des Capacités en Matière de Diversité et d’Inclusion
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
          src={women}
          alt="Entretient image"
          sx={{
            width: isSmallScreen ? "9rem" : "30%",
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
            <b>Formations obligatoires</b> : Ateliers et formations sur la
            diversité et l&apos;inclusion pour tous les employés.
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Programmes de mentorat</b> : Programmes de mentorat pour soutenir
            les talents issus de groupes sous-représentés.
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Ressources en ligne</b> : Accès à des modules de formation en
            ligne sur des sujets spécifiques.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
