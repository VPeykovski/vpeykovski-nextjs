import Layout from "../layout/Layout";
import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import TransformTitle from "../transformTitle/TransformTitle";
import JobCard from "./JobCard";
export default function Skills() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{ pt: "150px" }}>
          <TransformTitle title={t("skills:title.partOne")} />
          <TransformTitle title={t("skills:title.partTwo")} />

          <Typography sx={{ color: "typography.secondary", pt: "2.5rem" }}>
            {t("skills:exprerience")}
          </Typography>

          <Typography sx={{ color: "typography.secondary", pt: "2rem" }}>
            {t("skills:skills")}
          </Typography>

          <Typography sx={{ color: "typography.secondary", pt: "2rem" }}>
            Visit my LinkedIn profile for more details or just contact me.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <JobCard
            jobTitle={t("common:jobTitle")}
            companyName={t("job:companyName")}
            workTime='2019-current'
            jobDescription={t("job:jobDescription")}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
