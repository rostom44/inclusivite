import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import graph from "../assets/graph2.png";
import thinking from "../assets/thinking.svg";
import FeaturedPost from "./FeaturedPost";
import Header from "./Header";
import Main from "./Main";
import MainFeaturedPost from "./MainFeaturedPost";
import Sidebar from "./Sidebar";
import MiseOeuvreCpnt from "./MiseOeuvreCpnt";

// const sections = [
//   { title: "Technology", url: "#" },
//   { title: "Design", url: "#" },
//   { title: "Culture", url: "#" },
//   { title: "Business", url: "#" },
//   { title: "Politics", url: "#" },
//   { title: "Opinion", url: "#" },
//   { title: "Science", url: "#" },
//   { title: "Health", url: "#" },
//   { title: "Style", url: "#" },
//   { title: "Travel", url: "#" },
// ];

const mainFeaturedPost = {
  title: "Chez InnovaTeam, transformons l'exclusion en inclusion, ensemble !",
  description:
    "Découvrez comment InnovaTeam crée un environnement inclusif, en éliminant les barrières et en promouvant la diversité.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Comprendre l'Acculturation",
    date: "Juin 25",
    description: "Favorise la compréhension mutuelle et la cohésion sociale...",
    image: thinking,
    imageLabel: "thinking",
  },
  {
    title: "La diversité et l’inclusion",
    date: "Mars 11",
    description:
      "Communiquer de façon ouverte et transparente au sujet des avancées réalisées en rapport avec les priorités...",
    image: graph,
    imageLabel: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "subTitle 1", url: "#" },
    { title: "subTitle 2", url: "#" },
    { title: "subTitle 3", url: "#" },
    { title: "subTitle 4", url: "#" },
    { title: "subTitle 5", url: "#" },
  ],
  social: [
    { name: "X", icon: XIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Header title="InnovaTeam" />
        <Container maxWidth="xl">
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title="From the firehose" />

              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
            <MiseOeuvreCpnt />
          </main>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
