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
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ width: {xs: "100%",lg:"100%"} }}>
            <Header pType="projects" />
          </Grid>
          <Grid
            item
            paddingTop="5vh"
            alignItems="center"
            sx={{ paddingLeft: { lg: "76px" }, width:{xs: "95%",lg:"100%"}}}
          >
            <ProjectView />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Projects;
