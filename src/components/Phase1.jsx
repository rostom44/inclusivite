import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import devWeb from "../assets/developpeurs-web.jpg";

export default function Phase1() {
  const isSmallScreen = useMediaQuery("(max-width:428px)");

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
        sx={{
          pt: "1.5rem",
          pl: "2rem",
          pb: "1rem",
          fontWeight: "bold",
          fontSize: isSmallScreen ? "1rem" : "1.5rem",
        }}
      >
        Phase 1 : Conception et Développement
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "",
          width: "100%",
          gap: "0.5rem",
        }}
      >
        <Box
          component="ul"
          sx={{
            width: isSmallScreen ? "80%" : "55%",
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
            <b>Développement du site web</b> : Engager une équipe de
            développement web pour créer une plateforme intuitive et accessible.
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Création de contenu</b>: Développer des ressources et des
            contenus pour le site web et la newsletter..
          </Typography>
        </Box>
        <Box
          component="img"
          src={devWeb}
          alt="developpment web "
          sx={{
            width: isSmallScreen ? "9rem" : "40%",
            ml: isSmallScreen ? "7.5rem" : "",
            pl: "1rem",
            pr: "1rem",
            borderRadius: "2rem",
          }}
        />
      </Box>
    </Paper>
  );
}
