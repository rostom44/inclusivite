import { Box, Container, Paper, Typography } from "@mui/material";
import entretient from "../assets/entretient.jpeg";

export default function MissionCpnt() {
  return (
    <Container disableGutters sx={{ height: "100%", width: "100%" }}>
      <Paper
        elevation={2}
        sx={{
          height: "100%",
          width: "100%",
          mt: "2rem",
          backgroundColor: "#D9D9D9",
        }}
      >
        <Typography variant="h5" sx={{ p: "1rem" }}>
          Recrutement et développement des talents
        </Typography>
        <Box sx={{ display: "flex", width: "100%" }}>
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
              sx={{ pt: "0.5rem", fontSize: "1rem", textJustify: "auto" }}
            >
              Mise en place d’une nouvelle plateforme de recrutement qui
              renforce l’inclusivité grâce à des fonctionnalités assurant une
              meilleure accessibilité
            </Typography>
            <Typography
              component="li"
              sx={{ pt: "0.5rem", fontSize: "1rem", textJustify: "auto" }}
            >
              Lancement d’une revue complète des politiques et processus de
              gestion des ressources humaines en place, y compris le processus
              de recrutement, dans une perspective d’inclusion à l’égard des
              handicaps
            </Typography>
            <Typography
              component="li"
              sx={{ pt: "0.5rem", fontSize: "1rem", textJustify: "auto" }}
            >
              Prise en compte volontariste de la diversité aux différentes
              étapes du processus de recrutement, avec, notamment, une
              composition plurielle des jurys d’entretien.
            </Typography>
          </Box>
          <Box
            component="img"
            src={entretient}
            alt="Entretient image"
            sx={{
              height: "90%",
              width: "45%",
              p: "1rem",
              borderRadius: "2rem",
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
}
