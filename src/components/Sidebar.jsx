import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Newsletter from "./Newsletter";
import GraphCpnt from "./GraphCpnt";

export default function Sidebar(props) {
  const { description, title } = props;
  const isSmallScreen = useMediaQuery("(max-width: 428px)");

  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        height: "100vh",
        mt: "3.5rem",
        display: isSmallScreen ? "none" : "",
      }}
    >
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>

      <Newsletter />
      <GraphCpnt />
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
