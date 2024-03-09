import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import Button from "./components/Button";
import BannerImage from "./components/BannerImage";
import Translate from "./components/Translate";

export function Banner() {
  const [comingSoonShow, setComingSoonShow] = useState(false);

  const handleMouseEnter = () => {
    setComingSoonShow(true);
  };

  const handleMouseLeave = () => {
    setComingSoonShow(false);
  };

  function createAnimation(top: number) {
    const isMobile = window.innerWidth <= 640;
    const height = isMobile ? 145 : 285;

    const string = `0% {
        transform: translateY(-100px);
      };
      20%, 40% {
        transform: translateY(${height}px);
        animation-timing-function: cubic-bezier(0, .5, .5, 1);
      },
      30% {
        transform: translateY(${height / 2}px);
      };
      50% {
        transform: translateY(${height / 2 + 20}px);
      };
      85% {
        transform: translateY(${height}px);
      };
      90% {
        transform: translateY(${height}px);
        opacity: 0;
      };
      to {
        transform: translateY(0px);
        opacity: 0;
      };
    `;

    return keyframes`${string}`;
  }

  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "203px",

        "@media(max-width: 640px)": {
          paddingTop: "143px",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Translate>
          <Typography
            sx={{
              maxWidth: "993px",
              background:
                "linear-gradient(91deg, #FF008A 0%, #575FFF 33.07%, #000 98.79%)",
              backgroundClip: "text",
              webkitTextFillColor: "transparent",
              color: "transparent",
              fontSize: "72px",
              textAlign: "center",
              fontWeight: 700,
              "@media(max-width: 640px)": {
                fontSize: "32px",
              },
            }}
          >
            Transcending the Meta, Embracing Internet Computer
          </Typography>
        </Translate>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "0 20px",
          margin: "50px 0 0 0",
          "@media(max-width: 640px)": {
            flexDirection: "column",
            gap: "20px 0",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              transform: "translate(0, -100%)",
              transition: "all 300ms",
              visibility: comingSoonShow ? "visible" : "hidden",
              opacity: comingSoonShow ? 1 : 0,
            }}
          >
            <img src="/images/coming-soon.svg" alt="coming soon" />
          </Box>

          <Translate>
            <Button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Install Metaic
            </Button>
          </Translate>
        </Box>

        <Box>
          <Translate>
            <Button type="secondary">Buy $META</Button>
          </Translate>
        </Box>

        <Box>
          <Translate>
            <Button type="secondary">Position Info</Button>
          </Translate>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "0 0 285px 0",
          display: "flex",
          width: "100%",
          justifyContent: "center",

          "@media(max-width: 640px)": {
            padding: "0 0 145px 0",
          },
        }}
      >
        <Box sx={{ width: "2px", height: "1px", position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              right: "390px",
              top: 0,
              transform: "translate(0, -100%)",
              animation: `${createAnimation(
                0
              )} 2000ms cubic-bezier(0.5, 0, 1, 0.5) infinite`,

              "@media(max-width: 640px)": {
                right: "150px",
              },
            }}
          >
            <BannerImage src="/images/feature5.svg" alt="feature5image" />
          </Box>

          <Box
            sx={{
              position: "absolute",
              right: "252px",
              top: "0px",

              animation: `${createAnimation(
                0
              )} 4000ms cubic-bezier(0.5, 0, 1, 0.5) infinite`,

              "@media(max-width: 640px)": {
                right: "120px",
                top: "0px",
              },
            }}
          >
            <BannerImage src="/images/feature4.svg" alt="feature4image" />
          </Box>

          <Box
            sx={{
              position: "absolute",
              right: "54px",
              top: "0",

              animation: `${createAnimation(
                0
              )} 5000ms cubic-bezier(0, 0, 1, 0.5) infinite`,
            }}
          >
            <BannerImage src="/images/feature3.svg" alt="feature3image" />
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "54px",
              top: "0",

              animation: `${createAnimation(
                0
              )} 3000ms cubic-bezier(0, 0, 0.5, 0.5) infinite`,
            }}
          >
            <BannerImage src="/images/feature2.svg" alt="feature2image" />
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "250px",
              top: "0",

              animation: `${createAnimation(
                0
              )} 6000ms cubic-bezier(1, 0, 1, 0.5) infinite`,

              "@media(max-width: 640px)": {
                left: "140px",
                top: "0",
              },
            }}
          >
            <BannerImage src="/images/feature1.svg" alt="feature1image" />
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "357px",
              top: "0",

              animation: `${createAnimation(
                0
              )} 2000ms cubic-bezier(1, 0, 1, 0.5) infinite`,
            }}
          >
            <BannerImage src="/images/feature0.svg" alt="feature0image" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
