import { Box, Typography } from "@mui/material";
import SocialMediaItem from "./components/SocialMediaItem";
import Title from "./components/Title";
import Translate from "./components/Translate";

import {
  TwitterMetaic,
  TwitterWojak,
  Github,
  Telegram,
  Mora,
} from "./constants/index";

export function Social() {
  return (
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
          joining a community of pioneers on the forefront of the decentralized
          web. Become a part of our movement today!
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "120px 120px 120px 120px",
            gap: "50px 140px",
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
          <SocialMediaItem link={Mora} image="/images/mora.svg" title="Mora" />
        </Box>
      </Translate>
    </Box>
  );
}
