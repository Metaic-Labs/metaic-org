import { Box, Typography } from "@mui/material";

export interface SocialMediaItemProps {
  image: string;
  link: string;
  title: string;
}

export default function SocialMediaItem({
  image,
  link,
  title,
}: SocialMediaItemProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "96px",
          height: "96px",
          transition: "all 200ms",
          "@media(max-width: 640px)": {
            width: "48px",
            height: "48px",
          },
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <a
          href={link}
          target="_blank"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
          rel="noreferrer"
        >
          <img width="100%" height="100%" src={image} alt="social media" />
        </a>
      </Box>

      <Typography
        sx={{
          margin: "20px 0 0 0",
          fontSize: "20px",
          fontWeight: 700,

          "@media(max-width: 640px)": {
            fontSize: "16px",
            margin: "10px 0 0 0",
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
