import React from "react";
import { Stack, Typography } from "@mui/material";
import StyledImg from "../StyledImg/StyledImg";

import Icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        backgroundColor: "white",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <StyledImg src={Icon} alt="dumbbell"></StyledImg>
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
