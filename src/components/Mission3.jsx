import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import formation from "../assets/formation.jpg";

export default function Mission3() {
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
        3. Sensibilisation et Information
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
            <b>Campagnes de sensibilisation</b> : Campagnes régulières pour
            sensibiliser les employés aux enjeux de la diversité et de
            l&apos;inclusion.
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Événements et conférences</b> : Organisation d&apos;événements,
            de conférences et de webinaires avec des experts du domaine.
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Partage de témoignages</b> : Témoignages et histoires de réussite
            de membres de l&apos;organisation.
          </Typography>
        </Box>
        <Box
          component="img"
          src={formation}
          alt="Entretient image"
          sx={{
            width: "30%",
            pl: "1rem",
            pr: "1rem",
            borderRadius: "2rem",
          }}
        />
      </Box>
    </Paper>
  );
}
