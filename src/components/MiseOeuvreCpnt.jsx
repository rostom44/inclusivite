import { Container, useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import PhaseCpnt from "./PhaseCpnt";

export default function MiseOeuvreCpnt() {
  const isSmallScreen = useMediaQuery("(max-width:428px)");

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ pb: "3rem", mt: isSmallScreen ? 0 : "2rem" }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          pt: "2rem",
          fontWeight: "bold",
          fontSize: isSmallScreen ? "1.5rem" : "2rem",
        }}
      >
        Mise en Œuvre
      </Typography>
      <Divider />
      <PhaseCpnt />
    </Container>
  );
}
