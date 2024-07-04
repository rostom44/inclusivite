import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import bgImg from "../assets/MainImg.svg";

export default function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        mt: "3rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "1rem",
        height: "25rem",
      }}
    >
      {/* Increase the priority of the hero background image */}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "black",
          background: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "1rem",
        }}
      />
      <Grid container sx={{ borderRadius: "1rem" }}>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 2, md: 5 },
              pr: { md: 0 },
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgb(58,112,176,95%)",
                height: "20rem",
                p: "1rem",
                borderRadius: "0.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Typography
                variant="h3"
                color="inherit"
                gutterBottom
                sx={{ fontSize: "2.3rem", m: 0 }}
              >
                {post.title}
              </Typography>
              <Typography
                variant="h5"
                color="inherit"
                paragraph
                sx={{ fontSize: "1.3rem", textJustify: "auto" }}
              >
                {post.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
