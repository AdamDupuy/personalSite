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
    projTitle: "Kevin's Catalog",
    projDescription:
      "A study on UI-UX design with Craigslist as our base website.",
    image: kevinsCatalogImage,
    projLink: "https://github.com/IkaikaL/csc-4243-project",
  },
  {
    projTitle: "Midnight Tanks",
    projDescription:
      "A 3D tank game built in Unity for a game development class.",
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
      <Container
        sx={{
          width: { xs: "550px", sm: "650px", md: "750px", lg: "1000px" },
          paddingTop: { xs: "1vh" },
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ width: "100%", height: "700px" }}
        >
          {ProjectList.map((project, index) => (
            <Grid
              item
              sx={{
                width: "500px",
                height: "100px",
                padding: "0px",
              }}
            >
              <a href={project.projLink}>
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "73%", lg: "100%" },
                    height: "200%",
                    backgroundColor: "secondary.main",
                    "&:hover": { backgroundColor: "secondary.dark" },
                  }}
                >
                  <Grid item container direction="row">
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ width: "auto" }}
                      >
                        <Grid item xs={8} sx={{ width: "50%" }}>
                          <Typography
                            textAlign={"start"}
                            variant="h5"
                            fontWeight={"bold"}
                            textTransform="none"
                            sx={{
                              margin: "0px",
                              width: "100%",
                              color: "primary.main",
                            }}
                          >
                            {project.projTitle}
                          </Typography>
                          <Typography
                            textAlign={"start"}
                            variant="h5"
                            textTransform="none"
                            sx={{
                              margin: "0px",
                              color: "secondary.light",
                              width: "80%",
                            }}
                          >
                            {project.projDescription}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          sx={{ width: "100%", height: "100%" }}
                        >
                          <div>
                            <img
                              alt="projectImages"
                              src={project.image}
                              style={{
                                boxSizing: "border-box",
                                overflow: "auto",
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                paddingTop: "7px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
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
