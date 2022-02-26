import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Title {
  title: string;
}

export default function TranformTitle({ title }: Title) {
  const titleSplit = title.split("");
  const componentTitle = titleSplit.map((char, i) => (
    <Typography
      sx={{
        color: "typography.secondary",
        fontSize: "6rem",
        lineHeight: "5.25rem",
        fontFamily: "font-file-82132",
      }}
      key={i}
      align='center'
      component='span'>
      {char}
    </Typography>
  ));

  return <Box component='h3'>{componentTitle}</Box>;
}
