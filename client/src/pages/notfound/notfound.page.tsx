import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const NotFoundPage = () => {
  return (
    <Box display="flex">
      <Typography variant="h4">404 Page Not Found</Typography>
      <Box ml={2}>
        <Button color="secondary" aria-label="home" href="/">
          <Home />
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
