import { useTranslation } from "next-i18next";
import Layout from "../layout/Layout";

import { Button, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";

import TransformTitle from "../transformTitle/TransformTitle";
export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <Layout>
      <Box sx={{ pt: "150px" }}>
        <TransformTitle title={t("home:title.firstPart")} />
        <TransformTitle title={t("home:title.secondPart")} />
        <TransformTitle title={t("home:title.thirdPart")} />
        <Typography
          sx={{
            pt: "25px",
            color: "typography.main",
            letterSpacing: "0.4rem",
          }}>
          {t("home:description")}
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            width: "220px",
            height: "50px",
            borderColor: "primary.main",
            border: "1px solid",
            mt: "50px",
          }}
          onClick={() => router.push("/contact")}>
          Contact me
        </Button>
      </Box>
    </Layout>
  );
}
