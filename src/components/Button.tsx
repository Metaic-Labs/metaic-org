import { Box, Typography } from "@mui/material";
import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Button({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) {
  return (
    <Box
      sx={{
        width: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "18px 44px",
        cursor: "pointer",
        background: "#FC5DB5",
        transition: "all 300ms",
        borderRadius: "80px",

        "&:hover": {
          transform: "translate3d(0px, -3px, 0.01px)",
        },
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Typography color="#fff" sx={{ fontSize: "24px" }}>
        {children}
      </Typography>
    </Box>
  );
}
