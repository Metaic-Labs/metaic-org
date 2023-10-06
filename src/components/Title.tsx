import { Typography } from "@mui/material";

export interface TitleProps {
  title: string;
  id?: string;
}

export default function Title({ title, id }: TitleProps) {
  return (
    <Typography
      sx={{
        fontSize: "54px",
        fontWeight: "700",
        textAlign: "center",
        "@media(max-width: 640px)": {
          fontSize: "34px",
        },
      }}
      id={id}
    >
      {title}
    </Typography>
  );
}
