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
import ProjectView from "../Components/ProjectView";

const customTheme = createTheme({
  palette: {
    primary: { main: "#0077C0" },
    secondary: {
      main: "#FAFAFA",
      light: "#C7EEFF",
    },
  },
});
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
            sx={{ paddingLeft: { lg: "76px" }, width: "100%" }}
          >
            <ProjectView />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Projects;
