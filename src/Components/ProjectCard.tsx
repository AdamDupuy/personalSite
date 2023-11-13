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

  const customTheme = createTheme({
    palette: {
      primary: { main: "#D6CC99" },
      secondary: { main: "#445D48" },
    },
  });
  
  const ProjectCard = () => {
    
    return (
      <ThemeProvider theme={customTheme}>
        <Container
          sx={{
            height: "10vh",
            minWidth: "100%",
          }}
        >
          <Grid
            container
            direction="column"
            sx={{
              color: "white",
              height: "15vh",
            }}
          >
            <Grid
              item
              sx={{
                width: { xs: "1px", lg: "11px" },
                display: "flex",
                justifyContent: "left",
              }}
              alignItems="left"
            >

            </Grid>
            <Grid
              container
              alignItems="right"
              justifyContent="right"
              direction="row"
              sx={{
                paddingTop: "5vh",
              }}
            >
              <Grid
                item
                sx={{
                  width: { xs: "200px", lg: "200px" },
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "right",
                }}
              >
                <Button>
                  <Typography textTransform="none" color="primary" variant="h6">
                    •{" "}
                  </Typography>
                  <Typography color="inherit" noWrap>
                    &nbsp;
                  </Typography>
                  <Typography textTransform="none" color="secondary" variant="h6">
                    Projects
                  </Typography>
                </Button>
              </Grid>
              <Grid
                item
                sx={{
                  width: { xs: "200px", lg: "200px" },
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "right",
                }}
              >
                <Button>
                  <Typography textTransform="none" color="primary" variant="h6">
                    •{" "}
                  </Typography>
                  <Typography color="inherit" noWrap>
                    &nbsp;
                  </Typography>
                  <Typography textTransform="none" color="secondary" variant="h6">
                    About Me
                  </Typography>
                </Button>
              </Grid>
              <Grid
                item
                sx={{
                  width: { xs: "200px", lg: "200px" },
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "right",
                }}
              >
                <Button >
                  <Typography textTransform="none" color="primary" variant="h6">
                    •{" "}
                  </Typography>
                  <Typography color="inherit" noWrap>
                    &nbsp;
                  </Typography>
                  <Typography textTransform="none" color="secondary" variant="h6">
                    Contact
                  </Typography>
                </Button>
              </Grid>
              <Grid
                item
                sx={{
                  width: { xs: "200px", lg: "200px" },
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "right",
                }}
              >
                <Button
                  color="primary"
                  variant="outlined"
                >
                  Resume
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  };
  
  export default ProjectCard;
  