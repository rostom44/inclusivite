import { useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function FeaturedPost(props) {
  const { post } = props;
  const isSmallScreen = useMediaQuery("(max-width:428px)");

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card
          sx={{
            display: "flex",
            color: "#2E2E2E",
            backgroundColor: "#D3EBFF",
            height: isSmallScreen ? "10rem" : "15rem",
          }}
        >
          <CardContent
            sx={{
              pl: "1rem",
              pt: "1rem",
              pb: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textJustify: "auto",
              width: isSmallScreen ? "80%" : "100%",
            }}
          >
            <Typography
              component="h2"
              variant={isSmallScreen ? "" : "h5"}
              sx={{
                fontWeight: "bold",
                fontSize: isSmallScreen ? "1rem" : "1.5rem",
              }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: isSmallScreen ? "0.8rem" : "1rem" }}
            >
              {post.date}
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              sx={{
                fontSize: isSmallScreen ? "0.8rem" : "",
                mb: isSmallScreen ? "0" : "",
                mt: "0.5rem",
              }}
            >
              {post.description}
            </Typography>
            <Typography variant="subtitle2" paragraph sx={{ mt: "1rem" }}>
              Lire la suite
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: isSmallScreen ? "7rem" : "40%",
              display: { sm: "block" },
              mr: "0.5rem",
            }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
