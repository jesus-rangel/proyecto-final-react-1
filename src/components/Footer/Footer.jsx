import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4" alignItems="center" px="40px" pt="24px">
      <Stack>
        <img src={Logo} alt="logo" width="200px" height="40px" />
      </Stack>
      <Typography variant="h5" pb="40px" mt="20px">
        Made by Jesus Rangel
      </Typography>
    </Box>
  );
};

export default Footer;
