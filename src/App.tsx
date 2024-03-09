import { Box } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Banner } from "./Banner";
import { KeyFeatures } from "./KeyFeatures";
import { Social } from "./Social";
import { Welcome } from "./Welcome";
import { WhatIs } from "./WhatIsMetaic";
import { Price } from "./Price";

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
  return (
    <main style={{ maxWidth: "100%", overflow: "hidden" }}>
      <Box sx={{ position: "relative" }}>
        <Background1 />

        <Background2 />
      </Box>

      <Header />

      <Banner />

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

      <Price />

      <Welcome />

      <WhatIs />

      <KeyFeatures />

      <Social />

      <Box sx={{ margin: "180px 0 0 0", width: "100%" }}>
        <Footer />
      </Box>
    </main>
  );
}
