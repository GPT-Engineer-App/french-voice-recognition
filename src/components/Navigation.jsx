import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box p={4} display="flex" gap={4}>
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/upload-audio">
        Upload Audio
      </Button>
    </Box>
  );
}

export default Navigation;
