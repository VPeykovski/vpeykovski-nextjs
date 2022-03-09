import Layout from "../layout/Layout";
import TransformTitle from "../transformTitle/TransformTitle";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Box sx={{ pt: "150px", width: "50%" }}>
        <TransformTitle title={t("about:title")} />

        <Typography sx={{ color: "typography.secondary", pt: "2.5rem" }}>
          {t("about:descriptionProfessional")}
        </Typography>

        <Typography sx={{ color: "typography.secondary", pt: "2rem" }}>
          {t("about:descriptionPersonal")}
        </Typography>

        <Typography sx={{ color: "typography.secondary", pt: "2.0rem" }}>
          {t("about:descriptionInterest")}
        </Typography>
      </Box>
    </Layout>
  );
}
