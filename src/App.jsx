import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GridBoard from "./components/GridBoard/GridBoard";

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1">
          grid compass
        </Typography>

        <Box sx={{ mt: 3 }}>
          <GridBoard placement="2,2 NORTH" />
        </Box>
      </Box>
    </Container>
  );
}

export default App;