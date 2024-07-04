import { Container } from "@mui/material";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";

export default function PhaseCpnt() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: "100%",
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Phase1 />
      <Phase2 />
      <Phase3 />
    </Container>
  );
}
