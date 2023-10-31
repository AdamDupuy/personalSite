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
            
        </Grid>
        </Container>
      </ThemeProvider>
    );
  };
  
  export default Projects;
  