import { Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import LogoIcon from "./icons/LogoIcon";

export default function Header() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Box
      component='header'
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.header",
      }}>
      <Box component='image' sx={{ cursor: "pointer" }}>
        <LogoIcon
          onClick={() => {
            router.push("/");
          }}
        />
      </Box>

      <Typography sx={{ color: "typography.main", my: "1rem" }}>
        {t("common:jobTitle")}
      </Typography>
    </Box>
  );
}
