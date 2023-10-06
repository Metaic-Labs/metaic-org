import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    link: {
      color: "#000",
      cursor: "pointer",
      fontSize: "18px",

      "&:hover": {
        fontWeight: 700,
      },

      "@media(max-width: 640px)": {
        fontSize: "16px",
      },
    },
  };
});

export default function Header() {
  const classes = useStyles();

  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        padding: "22px 50px",
        justifyContent: "space-between",
        width: "100%",

        "@media(max-width: 640px)": {
          padding: "10px 10px",
        },
      }}
    >
      <Box
        sx={{
          width: "128px",
          height: "32px",
          transition: "all 300ms",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(0.9)",
          },

          "@media(max-width: 640px)": {
            width: "82px",
            height: "32px",
          },
        }}
      >
        <img src="images/logo.svg" alt="logo" width="100%" height="100%" />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "0 60px",
          padding: "0 120px 0 0 ",
          alignItems: "center",

          "@media(max-width: 640px)": {
            padding: "0",
            gap: "0 10px",
          },
        }}
      >
        <Typography className={classes.link}>Home</Typography>
        <a href="#KeyFeatures">
          <Typography className={classes.link}>Key features</Typography>
        </a>
        <a href="#JoinUS">
          <Typography className={classes.link}>Join us</Typography>
        </a>
      </Box>
    </Box>
  );
}
