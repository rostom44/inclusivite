import { Box, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import logo from "../assets/logo_innovaTeam3.png";

export default function Header() {
  const isSmallScreen = useMediaQuery("(max-width:428px)");
  return (
    <>
      <Toolbar
        sx={{
          backgroundColor: "#0393c2",
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "55%",
            display: "flex",
            justifyContent: isSmallScreen ? "flex-start" : "flex-end",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo InnovaTeam"
            sx={{ height: "5rem" }}
          />
        </Box>
        <Button
          variant="outlined"
          size="small"
          sx={{
            color: "#3A70B0",
            backgroundColor: "white",
            height: "2.5rem",
          }}
        >
          Sign up
        </Button>
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
