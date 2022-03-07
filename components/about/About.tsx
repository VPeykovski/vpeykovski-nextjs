import Layout from "../layout/Layout";
import TransformTitle from "../transformTitle/TransformTitle";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Box sx={{ pt: "150px" }}>
        <TransformTitle title={t("about:title")} />
        <Box sx={{ pt: "2.5rem" }}>
          <Typography sx={{ color: "typography.secondary" }}>
            {t("about:descriptionProfessional.partOne")}
          </Typography>
          <Typography sx={{ color: "typography.secondary" }}>
            {t("about:descriptionProfessional.partTwo")}
          </Typography>
        </Box>
        <Box sx={{ pt: "2rem" }}>
          <Typography sx={{ color: "typography.secondary" }}>
            {t("about:descriptionPersonal.partOne")}
          </Typography>
          <Typography sx={{ color: "typography.secondary" }}>
            {t("about:descriptionPersonal.partTwo")}
          </Typography>
        </Box>
        <Box sx={{ pt: "2rem" }}>
          <Typography sx={{ color: "typography.secondary" }}>
            {t("about:descriptionInterest")}
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}
