import Layout from "../layout/Layout";

import { Typography, Theme } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Formik, Field, Form, FormikHelpers } from "formik";
import TransformTitle from "../transformTitle/TransformTitle";

interface Values {
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout>
      <TransformTitle title={t("contact:title")} />
      <Typography sx={{ color: "typography.secondary" }}>
        {t("contact:description")}
      </Typography>
      <Formik
        initialValues={{
          email: "",
          subject: "",
          message: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}>
        <Form>
          <Field
            id='email'
            name='email'
            placeholder={t("contact:form.email")}
            type='email'
          />
          <br />
          <Field
            id='subject'
            name='subject'
            placeholder={t("contact:form.subject")}
          />
          <br />
          <Field
            id='message'
            name='message'
            placeholder={t("contact:form.message")}
          />
          <br />
          <button type='submit'>{t("contact:buttonMessage")}</button>
        </Form>
      </Formik>
    </Layout>
  );
}
