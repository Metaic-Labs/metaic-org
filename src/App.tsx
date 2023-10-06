import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { keyframes } from "@emotion/react";

import Header from "./components/Header";
import Button from "./components/Button";
import WhatIsMetaic from "./components/WhatIsMetaic";
import AllocationItem from "./components/AllocationItem";
import SocialMediaItem from "./components/SocialMediaItem";
import Footer from "./components/Footer";
import Title from "./components/Title";
import BannerImage from "./components/BannerImage";
import Translate from "./components/Translate";

import {
  TwitterMetaic,
  TwitterWojak,
  Github,
  Telegram,
} from "./constants/index";

function Background1() {
  return (
    <Box
      sx={{
        width: "1052px",
        height: "1052px",
        borderRadius: "50%",
        background: "#F89FFF",
        filter: "blur(192px)",
        position: "absolute",
        top: "-600px",
        left: "-523px",
        zIndex: -1,
      }}
    />
  );
}

function Background2() {
  return (
    <Box
      sx={{
        width: "716px",
        height: "1052px",
        borderRadius: "50%",
        background: "#4651F1",
        filter: "blur(192px)",
        position: "absolute",
        transform: "rotate(33.727deg)",
        top: "356px",
        right: "-289px",
        zIndex: -1,
      }}
    />
  );
}

export default function Home() {
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
    <main style={{ maxWidth: "100%", overflow: "hidden" }}>
      <Box sx={{ position: "relative" }}>
        <Background1 />

        <Background2 />
      </Box>

      <Header />

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
            margin: "50px 0 0 0",
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

      <Box
        sx={{ width: "100%", height: "89px", position: "relative", zIndex: 2 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "2380px",
            height: "89px",
            borderRadius: "100%",
            background: "#000",
            zIndex: -1,
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          background: "#000",
          width: "100%",
          marginTop: "-40px",
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
                Our goal is to revolutionize how you interact with Twitter and
                the Internet Computer ecosystem.
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
                With our easy-to-use plugin, we are bringing together the world
                of social media and decentralized technology. Powered by
                Internet Computer, Metaic is poised to become the prime gateway
                for billions pursuing the idea of decentralization.
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

      <Box
        sx={{
          margin: "-155px 0 0 0",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 4,
        }}
      >
        <Translate>
          <WhatIsMetaic />
        </Translate>
      </Box>

      <Box
        sx={{
          margin: "120px 0 0 0",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "0 15px",
        }}
      >
        <Translate>
          <Title id="KeyFeatures" title="Key Features" />
        </Translate>

        <Box
          sx={{
            display: "flex",
            maxWidth: "1240px",
            justifyContent: "space-between",
            margin: "115px 0 0 0",
            width: "100%",
            "@media(max-width: 640px)": {
              flexDirection: "column",
              gap: "20px 0",
            },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Translate>
              <Box>
                <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>
                  Wallet & Identity Management
                </Typography>

                <Typography color="#000" fontSize="18px">
                  Seamlessly link or create a wallet.
                </Typography>

                <Typography color="#000" fontSize="18px">
                  Bind your Twitter identity for an enhanced online experience.
                </Typography>
              </Box>

              <Box sx={{ margin: "50px 0 0 0" }}>
                <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>
                  Social Engagement Tools
                </Typography>

                <Typography color="#000" fontSize="18px">
                  Gift tokens and NFTs directly from Twitter.
                </Typography>

                <Typography color="#000" fontSize="18px">
                  Engage in SNS governance and NNS voting.
                </Typography>
              </Box>

              <Box sx={{ margin: "50px 0 0 0" }}>
                <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>
                  Stay Updated
                </Typography>

                <Typography color="#000" fontSize="18px">
                  Be in the know with the latest airdrops in the IC ecosystem.
                </Typography>

                <Typography color="#000" fontSize="18px">
                  Access essential IC links.
                </Typography>
              </Box>

              <Box sx={{ margin: "50px 0 0 0" }}>
                <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>
                  Curated Discoveries
                </Typography>

                <Typography color="#000" fontSize="18px">
                  Dive into IC projects, influencers, and top DApps.
                </Typography>
              </Box>

              <Box sx={{ margin: "50px 0 0 0" }}>
                <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>
                  NFT Avatar Verification
                </Typography>

                <Typography color="#000" fontSize="18px">
                  Instantly verify the ownership of Twitter avatars&apos; NFTs.
                </Typography>
              </Box>
            </Translate>

            <Box
              sx={{
                width: "852px",
                height: "852px",
                position: "absolute",
                zIndex: -1,
                top: "-60px",
                left: "-340px",
              }}
            >
              <img
                src="/images/features-bg.svg"
                alt="features bg"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>

          <Translate
            beforeClass="before-translate-image"
            afterClass="after-translate-image"
          >
            <Box
              sx={{
                maxWidth: "518px",
                maxHeight: "616px",
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <img width="100%" src="/images/features.svg" alt="features" />
            </Box>
          </Translate>
        </Box>

        <Box
          sx={{
            margin: "256px 0 0 0",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "0 20px",

            "@media(max-width: 640px)": {
              margin: "156px 0 0 0",
            },
          }}
        >
          <Translate>
            <Title title=" Metaic Token (MT) Allocation" />
          </Translate>

          <Translate>
            <Typography mt="20px" sx={{ fontSize: "24px" }}>
              With a total supply of 1 billion MT tokens, our allocation is as
              follows
            </Typography>
          </Translate>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "0 135px",
              margin: "100px 0 0 0",
              "@media(max-width: 640px)": {
                flexDirection: "column",
                alignItems: "center",
                gap: "40px 0",
              },
            }}
          >
            <Translate
              beforeClass="before-translate-image"
              afterClass="after-translate-image"
            >
              <Box
                sx={{
                  position: "relative",
                  maxWidth: "391px",
                  maxHeight: "391px",
                }}
              >
                <img
                  width="100%"
                  height="100%"
                  src="/images/allocation.svg"
                  alt="allocation"
                />
              </Box>
            </Translate>

            <Box sx={{ position: "relative" }}>
              <Translate>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "200px 200px",
                    gap: "50px 122px",

                    "@media(max-width: 640px)": {
                      gridTemplateColumns: "240px",
                      gap: "40px 0",
                    },
                  }}
                >
                  <AllocationItem
                    percent="10%"
                    title="Early Investors"
                    color="#6D73F5"
                  />

                  <AllocationItem
                    percent="10%"
                    title="Wojakic Token Airdrop"
                    color="#86AAF1"
                  />

                  <AllocationItem percent="12%" title="Team" color="#00D2A0" />

                  <AllocationItem percent="30%" title="SNS" color="#FFCE20" />

                  <AllocationItem
                    percent="38%"
                    title="SNS DAO"
                    color="#FF5CB4"
                  />
                </Box>
              </Translate>

              <Box
                sx={{
                  width: "812px",
                  height: "812px",
                  position: "absolute",
                  zIndex: -1,
                  top: "-260px",
                  right: "-440px",
                }}
              >
                <img
                  src="/images/allocation-bg.svg"
                  alt="allocation bg"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "200px 0 0 0",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Translate>
          <Title id="JoinUS" title="Join the Movement" />

          <Typography
            sx={{
              fontSize: "24px",
              margin: "20px 0 0 0",
              maxWidth: "1000px",
              textAlign: "center",
              "@media(max-width: 640px)": {
                fontSize: "16px",
              },
            }}
          >
            By joining Metaic, you&apos;re not just using a plugin – you&apos;re
            joining a community of pioneers on the forefront of the
            decentralized web. Become a part of our movement today!
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "120px 120px 120px 120px",
              gap: "0 140px",
              margin: "64px 0 0 0",
              justifyContent: "center",

              "@media(max-width: 640px)": {
                gridTemplateColumns: "120px 120px",
                gap: "10px 20px",
              },
            }}
          >
            <SocialMediaItem
              link={TwitterMetaic}
              image="/images/twitter_metaic.svg"
              title="Metaic"
            />
            <SocialMediaItem
              link={TwitterWojak}
              image="/images/twitter_wojakic.svg"
              title="Wojakic"
            />
            <SocialMediaItem
              link={Telegram}
              image="/images/telegram.svg"
              title="Telegram"
            />
            <SocialMediaItem
              link={Github}
              image="/images/github.svg"
              title="Github"
            />
          </Box>
        </Translate>

        <Box sx={{ margin: "180px 0 0 0", width: "100%" }}>
          <Footer />
        </Box>
      </Box>
    </main>
  );
}
