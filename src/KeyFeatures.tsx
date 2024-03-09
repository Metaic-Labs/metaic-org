import { Box, Typography } from "@mui/material";
import AllocationItem from "./components/AllocationItem";
import Title from "./components/Title";
import Translate from "./components/Translate";

export function KeyFeatures() {
  return (
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
                  gridTemplateColumns: "400px",
                  alignItems: "center",
                  gap: "50px 122px",
                  "@media(max-width: 640px)": {
                    gridTemplateColumns: "240px",
                    gap: "40px 0",
                  },
                }}
              >
                {/* <AllocationItem
                  percent="10%"
                  title="Early Investors"
                  color="#6D73F5"
                />

                <AllocationItem
                  percent="10%"
                  title="Wojakic Token Airdrop"
                  color="#86AAF1"
                /> */}

                <AllocationItem percent="10%" title="Team" color="#FF5CB4" />

                <AllocationItem
                  percent="90%"
                  title="Initial liquidity"
                  color="#6D73F5"
                />

                {/* <AllocationItem percent="38%" title="SNS DAO" color="#FF5CB4" /> */}
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
  );
}
