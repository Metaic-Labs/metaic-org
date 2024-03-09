import { Box, Typography } from "@mui/material";
import Translate from "./components/Translate";

export function Welcome() {
  return (
    <Box
      sx={{
        background: "#000",
        width: "100%",
        padding: "0 0 255px 0",
        position: "relative",
        zIndex: 3,
      }}
    >
      <Box sx={{ minHeight: "80px" }}>
        <Translate>
          <Typography
            align="center"
            sx={{
              fontWeight: 700,
              fontSize: "54px",
              color: "#ffffff",
              "@media(max-width: 640px)": {
                fontSize: "34px",
              },
            }}
          >
            Welcome to Metaic
          </Typography>
        </Translate>
      </Box>

      <Translate>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0 0 0",
            padding: "0 10px",
          }}
        >
          <Box
            sx={{
              maxWidth: "1240px",
            }}
          >
            <Typography
              color="#FC5DB5"
              fontWeight={700}
              fontSize={40}
              component="span"
              sx={{
                "@media(max-width: 640px)": {
                  fontSize: "18px",
                },
              }}
            >
              Our goal is to revolutionize how you interact with Twitter and the
              Internet Computer ecosystem.
            </Typography>
            <Typography
              color="#ffffff"
              fontWeight={700}
              fontSize={40}
              component="span"
              sx={{
                "@media(max-width: 640px)": {
                  fontSize: "18px",
                },
              }}
            >
              With our easy-to-use plugin, we are bringing together the world of
              social media and decentralized technology. Powered by Internet
              Computer, Metaic is poised to become the prime gateway for
              billions pursuing the idea of decentralization.
            </Typography>
            <Typography
              color="#696BFF"
              fontWeight={700}
              fontSize={40}
              component="span"
              sx={{
                "@media(max-width: 640px)": {
                  fontSize: "18px",
                },
              }}
            >
              We aim to enlighten the masses about cutting-edge blockchain
              technology offered by ICP and provide access to countless
              innovative DApps within the ICP ecosystem.
            </Typography>
          </Box>
        </Box>
      </Translate>
    </Box>
  );
}
