import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MissionCpnt from "./MissionCpnt";

export default function Main() {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Service de Suivi en 6 Étapes
      </Typography>
      <Divider />
      <MissionCpnt />
    </Grid>
  );
}
