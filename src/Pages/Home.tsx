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
            <Header />
          </Grid>
          <Grid
            container
            paddingTop="7vh"
            direction="column"
            justifyContent="center"
            width="50%"
            height="60%"
          >
            <Grid
              container
              direction="column"
              alignItems="left"
              justifyContent="center"
              sx={{
                width: "100%",
                paddingTop: "50px",
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
                paddingTop="20px"
                width="500px"
              >
                I'm a software engineer specializing in Java Springboot backend
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
