import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

interface Card {
  jobTitle: string;
  companyName: string;
  workTime: string;
  jobDescription: string;
}

export default function JobCard({
  jobTitle,
  companyName,
  workTime,
  jobDescription,
}: Card) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundColor: "background.cardBackground",
        p: "2rem",
      }}>
      <Typography
        component='header'
        variant='h4'
        sx={{
          color: "typography.secondary",
          fontFamily: "font-file-82132",
          mb: "1rem",
        }}>
        {jobTitle}
      </Typography>
      <Box component='section' sx={{ mb: "1rem" }}>
        <Typography sx={{ color: "typography.main" }}>{companyName}</Typography>
        <Typography component='time' sx={{ color: "typography.main" }}>
          {workTime}
        </Typography>
      </Box>
      <Typography component='footer' sx={{ color: "typography.main" }}>
        {jobDescription}
      </Typography>
    </Box>
  );
}
