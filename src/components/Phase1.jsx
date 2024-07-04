import { Box, Paper, Typography } from "@mui/material";
import devWeb from "../assets/developpeurs-web.jpg";

export default function Phase1() {
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
        Phase 1 : Conception et Développement
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
            <b>Développement du site web</b> : Engager une équipe de
            développement web pour créer une plateforme intuitive et accessible.
          </Typography>
          <Typography
            component="li"
            sx={{ pt: "1rem", fontSize: "1rem", textJustify: "auto" }}
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
