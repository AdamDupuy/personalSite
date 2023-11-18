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
            <Header />
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Typography
              variant="h3"
              align="center"
              paddingTop="5vh"
              color="primary"
              textTransform="none"
            >
              Projects
            </Typography>
            <Container sx={{ width: "1000px" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ width: "100%", height: "800px" }}
              >
                {ProjectList.map((project, index) => (
                  <Grid
                    item
                    xs={6}
                    sx={{
                      width: "500px",
                      height: "150px",
                      padding: "15px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "secondary.main",
                        "&:hover": { backgroundColor: "secondary.dark" },
                      }}
                    >
                      <Grid item xs={12} container direction="column">
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ width: "100%" }}
                          >
                            <Grid item xs={7} sx={{ width: "50%" }}>
                              <Typography
                                textAlign={"start"}
                                fontSize={"15"}
                                fontWeight={"bold"}
                                textTransform="none"
                                sx={{
                                  margin: "1px",
                                  width: "100%",
                                  color: "primary.dark",
                                }}
                              >
                                {project.projTitle}
                              </Typography>
                              <Typography
                                textAlign={"start"}
                                textTransform="none"
                                sx={{ margin: "1px", color: "secondary.light" }}
                              >
                                {project.projDescription}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={4}
                              sx={{ width: "100%", height: "100%" }}
                            >
                              <img
                                src={project.image}
                                style={{
                                  boxSizing: "border-box",
                                  overflow: "auto",
                                  position: "static",
                                  width: "80%",
                                  height: "80%",
                                  paddingTop: "10px",
                                  paddingLeft: "",
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Projects;
