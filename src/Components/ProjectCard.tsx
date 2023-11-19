import {
    Container,
    createTheme,
    ThemeProvider,
    Grid,
    TextField,
    Typography,
    Button,
    Box,
  } from "@mui/material";
import underConstructionImage from "../Assets/underConstruction.jpg";
import inkParadiseImage from "../Assets/inkParadise.png";
import kevinsCatalogImage from "../Assets/kevinsCatalog.png";
import midnightTanksImage from "../Assets/midnightTanks.png";

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
        "A Manga reading site built with React.tsx using api calls from Mangadex.",
      image: inkParadiseImage,
      projLink: "https://github.com/IkaikaL/ink-paradise",
    },
    {
      projTitle: "Kevins Catalog",
      projDescription: "A pseudo-Craigslist I worked on in a UI-UX design class.",
      image: kevinsCatalogImage,
      projLink: "https://github.com/IkaikaL/csc-4243-project",
    },
    {
      projTitle: 'Midnight Tanks',
      projDescription: "A 3d Tank game Built in Unity.",
      image: midnightTanksImage,
      projLink: "https://github.com/RiceFarmerC/MidnightTanks",
    },
  ];  

  customTheme.typography.h5 = {
    fontSize: "0.8rem",
    "@media (min-width:600px)": {
      fontSize: "0.5rem",
    },
    [customTheme.breakpoints.up("md")]: {
      fontSize: "1.0rem",
    },
  };

  const ProjectCard = () => {
    
    return (
      <ThemeProvider theme={customTheme}>
        <Container sx={{ width: "1000px" }}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ width: "100%", height: "600px" }}
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
                    <a href={project.projLink}>
                    <Button
                      variant="contained"
                      sx={{
                        width: {xs:"70%", lg:"100%"},
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
                                variant="h5"
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
                                variant="h5"
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
                              <img alt="projectImages"
                                src={project.image}
                                style={{
                                  boxSizing: "border-box",
                                  overflow: "auto",
                                  position: "static",
                                  width: "100%",
                                  height: "100%",
                                  paddingTop: "7px",
                                  paddingLeft: "5px",
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Button>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Container>
      </ThemeProvider>
    );
  };
  
  export default ProjectCard;
  