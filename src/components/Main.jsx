import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
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
      <Typography variant="h4" gutterBottom>
        Notre Mission
      </Typography>
      <Divider />
      <MissionCpnt />
      <Typography variant="h4" gutterBottom>
        Nos Articles
      </Typography>
      <Divider />
      <Container component="section" disableGutters></Container>
    </Grid>
  );
}
