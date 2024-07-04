import { Box, Paper, Typography } from "@mui/material";
import communication from "../assets/communication.jpg";

export default function Phase2() {
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
        Phase 2 : Lancement et Communication
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
            <b>Promotion</b> : Promouvoir le site web et le service de suivi via
            les réseaux sociaux, des partenariats et des campagnes marketing.
          </Typography>
          <Typography
            component="li"
            sx={{ pt: "1rem", fontSize: "1rem", textJustify: "auto" }}
          >
            <b>Engagement</b>:Encourager l&apos;inscription à la newsletter et
            la participation à la communauté en ligne.
          </Typography>
        </Box>
        <Box
          component="img"
          src={communication}
          alt="haut parleur de communication "
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
