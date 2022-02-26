import { useCallback } from "react";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

import Button from "./Button";

export default function LocalButton() {
  const router = useRouter();
  const { t } = useTranslation();

  const changeLang = useCallback(
    (locale: string) => (event: React.MouseEvent) => {
      console.log(router.route);
      event.preventDefault();
      // Same route different language
      router.push(router.route, undefined, { locale });
    },
    [router]
  );
  if (!router.locale) {
    return null;
  }

  if (router.locale === "bg") {
    return (
      <Button variant='text' size='small' onClick={changeLang("en")}>
        {t("EN")}
      </Button>
    );
  }

  return (
    <Button variant='text' size='small' onClick={changeLang("bg")}>
      {t("BG")}
    </Button>
  );
}
