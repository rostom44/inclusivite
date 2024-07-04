import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import PhaseCpnt from "./PhaseCpnt";

export default function MiseOeuvreCpnt() {
  return (
    <Container disableGutters maxWidth={false} sx={{ pb: "3rem" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ pt: "2rem", fontWeight: "bold" }}
      >
        Mise en Œuvre
      </Typography>
      <Divider />
      <PhaseCpnt />
    </Container>
  );
}
