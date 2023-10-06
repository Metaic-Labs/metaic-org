import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#000",
        width: "100%",
        display: "flex",
        height: "120px",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",

        "@media(max-width: 640px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          left: "80px",
          top: 0,

          "@media(max-width: 640px)": {
            position: "static",
            left: 0,
            top: 0,
            height: "40px",
          },
        }}
      >
        <Box
          sx={{
            width: "132px",
            height: "32px",
            "@media(max-width: 640px)": {
              width: "66px",
              height: "16px",
            },
          }}
        >
          <img
            src="/images/footer_logo.svg"
            alt="footer logo"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: "18px",
          color: "#fff",
        }}
      >
        powered by internet computer
      </Typography>
    </Box>
  );
}
