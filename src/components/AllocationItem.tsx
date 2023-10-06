import { Box, Typography } from "@mui/material";

export interface AllocationProps {
  color: string;
  percent: string;
  title: string;
}

export default function AllocationItem({
  color,
  percent,
  title,
}: AllocationProps) {
  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography fontSize={32} fontWeight={700}>
        {percent}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "15px",
          borderRadius: "30px",
          background: "rgba(0, 0, 0, 0.07)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: percent,
            height: "15px",
            borderRadius: "30px",
            background: color,
          }}
        />
      </Box>
    </Box>
  );
}
