import { Box, Typography } from "@mui/material";
import Translate from "./components/Translate";
import { useMetaic } from "./hooks/useMetaic";
import { BigNumber } from "./utils/index";
import dayjs from "dayjs";

export function Price() {
  const { result: priceInfo } = useMetaic();

  return (
    <Box
      sx={{
        background: "#000",
        width: "100%",
        marginTop: "-40px",
        padding: "0 0 40px 0",
        position: "relative",
        zIndex: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Translate>
          <Box
            sx={{
              display: "flex",
              gap: "0 210px",
              padding: "0 0 100px 0",
              borderBottom: "1px solid rgba(255, 255, 255, 0.17)",
              "@media(max-width: 640px)": {
                flexDirection: "column",
                gap: "80px 0",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  maxWidth: "993px",
                  background:
                    "linear-gradient(90deg, #FC5DB5 0%, #763C5C 100%)",
                  backgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  color: "transparent",
                  fontSize: "40px",
                  textAlign: "center",
                  fontWeight: 700,
                  "@media(max-width: 640px)": {
                    fontSize: "28px",
                  },
                }}
              >
                {priceInfo
                  ? `$${new BigNumber(priceInfo.price).toString()}`
                  : "--"}
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  textAlign: "center",
                  "@media(max-width: 640px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Price
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  maxWidth: "993px",
                  background:
                    "linear-gradient(89deg, #696BFF 5.79%, #3F4099 99.28%)",
                  backgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  color: "transparent",
                  fontSize: "40px",
                  textAlign: "center",
                  fontWeight: 700,
                  "@media(max-width: 640px)": {
                    fontSize: "28px",
                  },
                }}
              >
                {priceInfo
                  ? `${new BigNumber(priceInfo.dynamic_fee_rate)
                      .multipliedBy(100)
                      .toFixed(2)}%`
                  : "--"}
              </Typography>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  textAlign: "center",
                  "@media(max-width: 640px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Dynamic Fee Rate
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  maxWidth: "993px",
                  background:
                    "linear-gradient(90deg, #76F7A4 0%, #459160 100%)",
                  backgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  color: "transparent",
                  fontSize: "40px",
                  textAlign: "center",
                  fontWeight: 700,
                  "@media(max-width: 640px)": {
                    fontSize: "28px",
                  },
                }}
              >
                {priceInfo
                  ? dayjs(
                      new BigNumber(priceInfo.day.toString())
                        .multipliedBy(24 * 60 * 60)
                        .multipliedBy(1000)
                        .toNumber()
                    ).format("YYYY/MM/DD")
                  : "--"}
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  textAlign: "center",
                  "@media(max-width: 640px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Date
              </Typography>
            </Box>
          </Box>
        </Translate>
      </Box>
    </Box>
  );
}
