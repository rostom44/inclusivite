import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import communication from "../assets/communication.jpg";

export default function Phase2() {
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
        Phase 2 : Lancement et Communication
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: isSmallScreen ? "column" : "",
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
            <b>Promotion</b> : Promouvoir le site web et le service de suivi via
            les réseaux sociaux, des partenariats et des campagnes marketing.
          </Typography>
          <Typography
            component="li"
            sx={{
              pt: "1rem",
              fontSize: isSmallScreen ? "0.7rem" : "1rem",
              textJustify: "auto",
            }}
          >
            <b>Engagement</b>:Encourager l&apos;inscription à la newsletter et
            la participation à la communauté en ligne.
          </Typography>
        </Box>
        <Box
          component="img"
          src={communication}
          alt="Entretient image"
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
