import { Box } from "@mui/material";
import WhatIsMetaic from "./components/WhatIsMetaic";
import Translate from "./components/Translate";

export function WhatIs() {
  return (
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
  );
}
