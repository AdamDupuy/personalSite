import {
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  Container,
  Grid,
  Button,
} from "@mui/material";
import Header from "../Components/Header";
import underConstructionImage from "../Assets/underConstruction.jpg";
import ProjectCard from "../Components/ProjectCard";

const customTheme = createTheme({
  palette: {
    primary: { main: "#D6CC99" },
    secondary: {
      main: "#445D48",
      light: "#FDE5D4",
    },
  },
});

const ProjectList = [
  {
    projTitle: "Ink Paradise",
    projDescription:
      "A Manga reading site built with React.tsx using api calls form Mangadex",
    image: underConstructionImage,
  },
  {
    projTitle: "Craiglist UI Upgrade",
    projDescription: "A pseudo-Craigslist i worked on in a UI-UX design class.",
    image: underConstructionImage,
  },
  {
    projTitle: '3d Tank Game "Midnight Tanks"',
    projDescription: "A 3d Tank game Built in Unity.",
    image: underConstructionImage,
  },
];

export var projectNum = ProjectList.length;

const Projects = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Container disableGutters sx={{ minWidth: "100%", minHeight: "100vh" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ width: "100%" }}>
            <Header pType="projects" />
          </Grid>
          <Grid
            item
            paddingTop="5vh"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <ProjectCard />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Projects;
