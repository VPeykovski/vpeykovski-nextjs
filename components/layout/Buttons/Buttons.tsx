import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ButtonGroup } from "@mui/material";
import Button from "./Button";
export default function Buttons() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <ButtonGroup
      component='nav'
      orientation='vertical'
      sx={{ flexGrow: "1", justifyContent: "center" }}>
      <Button
        type='button'
        onClick={() => {
          router.push("/about");
        }}>
        {t("common:nav.about")}
      </Button>
      <Button type='button' onClick={() => router.push("/skills")}>
        {t("common:nav.skills")}
      </Button>
      <Button type='button' onClick={() => router.push("/contact")}>
        {t("common:nav.contact")}
      </Button>
      <Button type='button' onClick={() => router.push("/cv")}>
        {t("common:nav.cv")}
      </Button>
    </ButtonGroup>
  );
}
