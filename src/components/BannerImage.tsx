import { Box } from "@mui/material";

export interface BannerImageProps {
  src: string;
  alt: string;
}

export default function BannerImage({ src, alt }: BannerImageProps) {
  return (
    <Box
      sx={{
        width: "90px",
        height: "90px",
        "@media(max-width: 640px)": {
          width: "40px",
          height: "40px",
        },
      }}
    >
      <img width="100%" height="100%" src={src} alt={alt} />
    </Box>
  );
}
