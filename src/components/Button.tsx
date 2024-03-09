import { Box, Typography } from "@mui/material";
import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  type?: "primary" | "secondary";
}

export default function Button({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  type = "primary",
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
        background: type === "primary" ? "#FC5DB5" : "#ffffff",
        transition: "all 300ms",
        borderRadius: "80px",
        boxShadow:
          type === "primary"
            ? "none"
            : "0px 4px 10px 0px rgba(184, 183, 252, 0.20)",
        "&:hover": {
          transform: "translate3d(0px, -3px, 0.01px)",
        },
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Typography
        color={type === "primary" ? "#fff" : "#000"}
        sx={{ fontSize: "24px" }}
      >
        {children}
      </Typography>
    </Box>
  );
}
