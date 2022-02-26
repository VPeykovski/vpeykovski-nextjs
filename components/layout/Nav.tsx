import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Grid, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import LocalButton from "./Buttons/LocaleButton";
import Buttons from "./Buttons/Buttons";
import React from "react";
import Header from "../header/Header";

export default function Nav() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Box
      component='header'
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "150px",
        backgroundColor: "background.nav",
        "@media (max-width:1199px)": {
          flexGrow: "1",
        },
      }}>
      <Header />
      <Buttons />
      <LocalButton />
      <Box
        component='footer'
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: "1",
        }}>
        <LinkedInIcon sx={{ fontSize: 30, color: "typography.main" }} />
      </Box>
    </Box>
  );
}
