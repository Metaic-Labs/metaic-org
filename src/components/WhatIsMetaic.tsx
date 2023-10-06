import { Box, Typography } from "@mui/material";

export default function WhatIsMetaic() {
  return (
    <Box
      sx={{
        maxWidth: "1240px",
        width: "100%",
        borderRadius: "40px",
        background: "linear-gradient(134deg, #FF5CB4 0%, #6D73F5 100%)",
        padding: "60px 70px",
        "@media(max-width: 640px)": {
          padding: "10px 20px",
        },
      }}
    >
      <Typography
        sx={{
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "54px",
          textAlign: "center",

          "@media(max-width: 640px)": {
            fontSize: "34px",
          },
        }}
      >
        What is Metaic?
      </Typography>

      <Typography
        sx={{
          margin: "30px 0 0 0",
          fontSize: "24px",
          color: "#ffffff",

          "@media(max-width: 640px)": {
            fontSize: "16px",
          },
        }}
      >
        Metaic is an innovative plugin built with love for the Internet
        Computer. It links your Twitter account with the Internet Computer
        ecosystem, making it easy to claim airdrops, participate in events, and
        explore your followers and followings right within Twitter.
      </Typography>
    </Box>
  );
}
