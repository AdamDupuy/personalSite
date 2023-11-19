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
  "@media (min-width:500px)": {
    fontSize: "0.5rem",
  },
  [customTheme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};

customTheme.typography.h4 = {
  fontSize: "0.4rem",
  "@media (min-width:500px)": {
    fontSize: "0.5rem",
  },
  [customTheme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
};

const ProjectView = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Container
        sx={{
          overflow: "auto",
          width: { xs: "515px", sm: "650px", md: "750px", lg: "1500px" },
          height: { xs: "700px", sm: "650px", md: "750px", lg: "1100px" },
          paddingTop: { xs: "5vh" },
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={12}
          sx={{
            width: "100%",
            height: "700px",
            "--Grid-borderWidth": "1px",
            "& > div": {
              borderBottom: "var(--Grid-borderWidth) dashed",
              borderColor: "secondary.light",
            },
          }}
        >
          {ProjectList.map((project, index) => (
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
                    <a
                      href={project.projLink}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Typography
                        textAlign={"start"}
                        variant="h4"
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
                    </a>
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
                  <Grid item xs={4} sx={{ width: "100%", height: "100%" }}>
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
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ProjectView;
