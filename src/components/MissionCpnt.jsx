import { Container } from "@mui/material";
import Mission1 from "./Mission1";
import Mission2 from "./Mission2";
import Mission3 from "./Mission3";
import Mission4 from "./Mission4";
import Mission5 from "./Mission5";

export default function MissionCpnt() {
  return (
    <Container
      disableGutters
      sx={{ width: "100%", height: "90vh", overflowY: "auto" }}
    >
      <Mission1 />
      <Mission2 />
      <Mission3 />
      <Mission4 />
      <Mission5 />
    </Container>
  );
}
