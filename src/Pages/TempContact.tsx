import {
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import computerIcon from "../Assets/computerIcon.png";
import questionIcon from "../Assets/questionMarkIcon.png";

const customTheme = createTheme({
  palette: {
    primary: { main: "#D6CC99" },
    secondary: {
      main: "#445D48",
      light: "#FDE5D4",
    },
  },
});

const TempContact = () => {
  const { state } = useLocation();
  const [body, setBody] = useState<String>("");
  const [pageTitle, setPageTitle] = useState<String>("");
  const [pageImage, setPageImage] = useState<any>();

  const fetchAboutMe = async () => {
    setBody(
      "Hello, my name is Adam! I started coding python in 2017 making text based games on an iPad. After highschool, I decided I wanted to code professionally and started at LSU in 2019. The Software Engineering concentration of computer science had lots of project based classes where I gained valuable experience programming with Java, ReactJS, GitHub, TypeScript, CSS, HTML, SQL, and Flutter. In my two internships I learned a lot about Jira, Agile, Confluence, Java SpringBoot, and professional presentations. I graduated from LSU in 2023 and I am working to continue becoming the best dev I can be."
    );
    setPageTitle("About Me");
    setPageImage(questionIcon);
  };

  const fetchContact = async () => {
    setBody("Email: adupuybusiness@gmail.com");
    setPageTitle("Contact Me");
    setPageImage(computerIcon);
  };

  const fetchPageInfo = async () => {
    fetchContact();
  };

  useEffect(() => {
    fetchPageInfo();
  });

  customTheme.typography.h5 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "0.7rem",
    },
    [customTheme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };

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
          <Grid item textAlign="center" sx={{ width: "100%" }}>
            <Box
              component="img"
              justifyContent="center"
              sx={{
                paddingTop: "5vh",
                height: "125px",
                width: "125px",
                backgroundImage: pageImage,
                alignItems: "left",
              }}
              src={pageImage}
            />
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Typography
              variant="h3"
              align="center"
              paddingTop="5vh"
              color="primary"
            >
              {pageTitle}
            </Typography>
          </Grid>
          <Grid item alignItems="center" sx={{ width: "1000px" }}>
            <Typography
              variant="h5"
              textAlign="center"
              paddingTop="10vh"
              color="secondary"
            >
              {body}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default TempContact;
