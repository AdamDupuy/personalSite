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

const customTheme = createTheme({
  palette: {
    primary: { main: "#D6CC99" },
    secondary: {
      main: "#445D48",
      light: "#FDE5D4",
    },
  },
});

customTheme.typography.h2 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [customTheme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

customTheme.typography.h3 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [customTheme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

customTheme.typography.h6 = {
  fontSize: "0.8rem",
  "@media (min-width:600px)": {
    fontSize: "0.7rem",
  },
  [customTheme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
};

const Home = () => {
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
            <Header pType="home" />
          </Grid>
          <Grid
            container
            paddingTop="7vh"
            direction="column"
            width="65%"
            height="60%"
            sx={{ alignItems: { xs: "left", lg: "center" } }}
          >
            <Grid
              container
              direction="column"
              alignItems="left"
              justifyContent="left"
              sx={{
                width: { xs: "500px", lg: "100%" },
                height: { xs: "450px" },
                paddingTop: "50px",
                paddingRight: { xs: "200px" },
              }}
            >
              <Typography color="primary">Hello, my name is</Typography>
              <Typography
                color="secondary"
                variant="h2"
                paddingTop="15px"
                sx={{ fontWeight: "bold" }}
              >
                Adam Dupuy.
              </Typography>
              <Typography
                color="secondary.light"
                variant="h3"
                paddingTop="15px"
                sx={{ fontWeight: "bold" }}
              >
                I create websites and games.
              </Typography>
              <Typography
                color="secondary.light"
                paddingTop="7vh"
                sx={{
                  paddingRight: { xs: "200px" },
                  width: { xs: "300px", lg: "700px" },
                }}
                variant="h6"
              >
                I'm a software engineer specializing in Java Springboot
                development and React Typescript development. I want to create
                things that make the internet a more enjoyable and better place.
                Currently, I am applying to jobs and learning more about
                programming in my free time.
              </Typography>
            </Grid>
            <Grid item sx={{ paddingTop: "5vh", width: "100%" }}>
              <a href="https://github.com/AdamDupuy">
                <Button
                  color="primary"
                  variant="outlined"
                  sx={{ width: "210px", padding: "10px" }}
                >
                  Check out my Github!
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
