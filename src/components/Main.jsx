import { useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MissionCpnt from "./MissionCpnt";

export default function Main() {
  const isSmallScreen = useMediaQuery("(max-width:428px)");

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
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", fontSize: isSmallScreen ? "1.5rem" : "2rem" }}
      >
        Service de suivi en 6 étapes
      </Typography>
      <Divider />
      <MissionCpnt />
    </Grid>
  );
}
