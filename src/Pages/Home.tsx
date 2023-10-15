import { 
    Typography,
    Box,
    createTheme,
    ThemeProvider,
    Container,
    Grid, 
} from "@mui/material";
import Header from "../Components/Header";
import image1 from "../Pages/Assets/griffithBeherit.png";

const customTheme = createTheme({
    palette: {
      primary: { main: "#393646" },
      secondary: { main: "#4F4557" },
      background: { default: "#F4EEE0"},
      text: { primary: "#6D5D6E"},
    },
  });

const Home = () => {

    return (
        <ThemeProvider theme={customTheme}>
            <Container disableGutters sx={{ minWidth: "100%", minHeight: "100vh" }}>
			<Grid
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
			>
				<Grid item sx={{ width: "100%" }}>
					<Header />
                </Grid>
                <Box
  component="img"
  sx={{
    height: '100px',
    width: '300px',
    maxHeight: { xs: '233px', md: '167px' },
    maxWidth: { xs: '350px', md: '250px' },
    backgroundImage: 'Assets/griffithBeherit.png'
}}
  alt="The house from the offer."
  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
/>
            </Grid>
            </Container>
        </ThemeProvider>
        
    );
};

export default Home;