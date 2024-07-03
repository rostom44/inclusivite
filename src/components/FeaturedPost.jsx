import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card
          sx={{
            display: "flex",
            color: "#2E2E2E",
            backgroundColor: "#D3EBFF",
            height: "15rem",
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
            }}
          >
            <Typography component="h2" variant="h5" sx={{ fontWeight: "bold" }}>
              {post.title}
            </Typography>
            <Typography variant="subtitle1">{post.date}</Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle2" paragraph>
              Lire la suite
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: "40%",
              display: { xs: "none", sm: "block" },
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
