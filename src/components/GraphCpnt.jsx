import { Box, Paper } from "@mui/material";
import graph3 from "../assets/graph3.png";

export default function GraphCpnt() {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "35%",
        mt: "1.5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={graph3}
        alt="Image graphique réussite entreprise"
        sx={{ height: "100%" }}
      />
    </Paper>
  );
}
